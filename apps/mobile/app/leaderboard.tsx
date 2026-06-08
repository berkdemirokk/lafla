import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { supabase } from "../lib/supabase";
import { tokens } from "../theme";

interface LeaderboardItem {
  id: string;
  display_name: string | null;
  total_xp: number;
  current_streak: number;
}

export default function LeaderboardScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<LeaderboardItem[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const fetchLeaderboard = async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      // 1) Get current authenticated user
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setCurrentUserId(user.id);
      }

      // 2) Get top 50 users sorted by total_xp (RPC bypasses RLS)
      const { data: profiles, error } = await supabase
        .rpc('get_leaderboard', { row_limit: 50 });

      if (error) throw error;
      
      setData(profiles || []);
    } catch (e) {
      console.error("[Leaderboard] Failed to fetch:", e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const renderItem = ({ item, index }: { item: LeaderboardItem; index: number }) => {
    const rank = index + 1;
    const isCurrentUser = item.id === currentUserId;

    return (
      <View style={[styles.card, isCurrentUser && styles.cardActive]}>
        {/* Rank Badge */}
        <View
          style={[
            styles.rankWrapper,
            rank === 1
              ? styles.rankCircleGold
              : rank === 2
              ? styles.rankCircleSilver
              : rank === 3
              ? styles.rankCircleBronze
              : styles.rankCircleDefault,
          ]}
        >
          <Text
            style={
              rank <= 3 ? styles.rankTextTop : styles.rankTextDefault
            }
          >
            {rank}
          </Text>
        </View>

        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={[styles.userName, isCurrentUser && styles.userNameActive]}>
            {item.display_name || "Anonim Öğrenci"}
          </Text>
          {item.current_streak > 0 && (
            <Text style={styles.userStreak}>🔥 {item.current_streak} Günlük Seri</Text>
          )}
        </View>

        {/* XP Value */}
        <View style={styles.xpWrapper}>
          <Text style={styles.xpText}>{item.total_xp.toLocaleString("tr-TR")}</Text>
          <Text style={styles.xpSub}>XP</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Liderlik Tablosu</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Main View */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={tokens.brand.primary} />
          <Text style={styles.loadingText}>Sıralama yükleniyor...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => fetchLeaderboard(true)}
              tintColor={tokens.brand.primary}
              colors={[tokens.brand.primary]}
            />
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Henüz sıralama verisi bulunamadı.</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  backBtn: {
    minWidth: 72,
  },
  backText: {
    color: tokens.text.secondary,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
  },
  title: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
  },
  headerRight: {
    minWidth: 72,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  loadingText: {
    color: tokens.text.secondary,
    fontSize: 14,
  },
  listContent: {
    padding: 16,
    gap: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: tokens.border.outline,
  },
  cardActive: {
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  rankWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  rankCircleGold: {
    backgroundColor: "#FFD700",
  },
  rankCircleSilver: {
    backgroundColor: "#C0C0C0",
  },
  rankCircleBronze: {
    backgroundColor: "#CD7F32",
  },
  rankCircleDefault: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.outline,
  },
  rankTextTop: {
    color: "#000000",
    fontWeight: tokens.weight.black,
    fontSize: 16,
  },
  rankTextDefault: {
    color: tokens.text.secondary,
    fontWeight: tokens.weight.bold,
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
    justifyContent: "center",
  },
  userName: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  userNameActive: {
    color: tokens.brand.primary,
  },
  userStreak: {
    fontSize: 12,
    color: tokens.text.tertiary,
    marginTop: 2,
    fontWeight: tokens.weight.medium,
  },
  xpWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  xpText: {
    fontSize: 16,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
  },
  xpSub: {
    fontSize: 10,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },
  emptyText: {
    color: tokens.text.tertiary,
    fontSize: 14,
  },
});
