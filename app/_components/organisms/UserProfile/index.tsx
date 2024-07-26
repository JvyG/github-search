import {
  LinkOutlined,
  TwitterOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Image from "next/image";

import { formatNumber } from "@/utils/formatNumberStars";
import Link from "@/components/atoms/Link";

interface UserProfileProps {
  avatar: string;
  name: string;
  userId: string;
  followers: number;
  following: number;
  userUrl: string;
  twitter?: string;
  blog?: string;
}
export default function UserProfile(props: UserProfileProps) {
  const { avatar, followers, following, name, userId, userUrl, blog, twitter } =
    props;
  return (
    <div className="flex flex-col gap-[12px] w-full sm:max-w-[240px]">
      <img
        src={avatar}
        alt={name}
        width={240}
        height={240}
        loading="eager"
        className="h-[240px] self-center rounded-full border-2 border-slate-200"
      />
      <div className="flex flex-col sm:items-center gap-[8px] sm:mx-auto">
        <span className="flex flex-row gap-[8px] items-center">
          <h1 className="font-semibold text-2xl">{name}</h1>
          <p className="text-slate-500">{userId}</p>
        </span>
        <div className="self-start flex flex-row items-center text-sm text-gray-500">
          <UsergroupAddOutlined className="mr-[2px]" />
          <p>
            <b className="font-bold">{formatNumber(followers)}</b> followers
          </p>
          <p className="ml-[8px]">
            <b className="font-bold">{formatNumber(following)}</b> following
          </p>
        </div>
        <div className="self-start flex flex-col gap-[4px] mt-[8px]">
          <span className="flex flex-row gap-[8px] items-center text-xs">
            <Image
              src={"/logos/github-mark.png"}
              width={14}
              height={14}
              alt="Github project repository"
            />
            <Link target="_blank" className="text-slate-700" href={userUrl}>
              {userId}
            </Link>
          </span>
          {twitter ? (
            <span className="flex flex-row gap-[8px] items-center text-xs">
              <TwitterOutlined style={{ fontSize: 14 }} />
              <Link
                target="_blank"
                className="text-slate-700"
                href={`https://twitter.com/${twitter}`}
              >
                @{twitter}
              </Link>
            </span>
          ) : (
            ""
          )}
          {blog ? (
            <span className="flex flex-row gap-[8px] items-center text-xs">
              <LinkOutlined style={{ fontSize: 14 }} />
              <Link target="_blank" className="text-slate-700" href={blog}>
                {blog}
              </Link>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
