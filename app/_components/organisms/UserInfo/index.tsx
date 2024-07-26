import Card from "@/components/atoms/Card";
import UserProfile from "@/components/organisms/UserProfile";
import UserRepositoriesList from "@/components/organisms/UserRepositoriesList";

interface UserInfoProps {
  userId: string;
  name: string;
  avatar: string;
  userUrl: string;
  followers: number;
  following: number;
  twitter?: string;
  blog?: string;
  repositories: Record<string, any>[];
}
export default function UserInfo(props: UserInfoProps) {
  const {
    name,
    avatar,
    followers,
    following,
    repositories,
    userId,
    twitter,
    blog,
    userUrl,
  } = props;
  return (
    <Card type="rest" className="w-full h-full lg:py-8">
      <div className="flex flex-col sm:flex-row gap-[24px]">
        <UserProfile
          avatar={avatar}
          followers={followers}
          following={following}
          name={name}
          userId={userId}
          userUrl={userUrl}
          blog={blog}
          twitter={twitter}
        />
        <UserRepositoriesList repositories={repositories} />
      </div>
    </Card>
  );
}
