begin;

-- Free Chat and Real Life generation are now fully on-device. Remove the
-- provider-era reservation/quota surface so it cannot keep accepting traffic
-- or retaining obsolete usage rows after the mobile rollout.
drop function if exists public.get_freechat_usage();
drop function if exists public.reserve_usage();
drop function if exists public.finalize_usage(uuid);
drop function if exists public.release_usage(uuid);

drop table if exists public.freechat_reservations;
drop table if exists public.freechat_usage;
drop table if exists public.user_rate_limits;

commit;
