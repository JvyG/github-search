import { StarOutlined } from "@ant-design/icons";

import Chip from "@/components/atoms/Chip";
import Link from "@/components/atoms/Link";
import { formatNumber } from "@/utils/formatNumberStars";

interface UserRepositoriesListProps {
  repositories: Record<string, any>[];
}

export default function UserRepositoriesList(props: UserRepositoriesListProps) {
  const { repositories } = props;

  return (
    <div className="flex-1">
      <h2 className="text-lg font-medium mb-[8px]">Repositories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[8px] auto-rows-fr">
        {repositories.map((repo) => (
          <div
            key={repo.id}
            className="border-2 border-gray-200 p-[12px] rounded-md gap-[8px] flex flex-col justify-between"
          >
            <div className="flex flex-row justify-between	items-center">
              <Link href={repo.html_url} target="_self" className="text-md">
                {repo.name}
              </Link>
              <Chip label={repo.visibility} />
            </div>
            <p className="text-xs text-slate-700 mt-[4px] justify-self-start flex-1">
              {repo.description || "No description"}
            </p>
            <div className="flex flex-row gap-[8px]">
              {repo.language ? (
                <p className="text-xs text-slate-500">{repo.language}</p>
              ) : (
                ""
              )}
              <span className="text-xs text-gray-500 flex flex-row items-center">
                <StarOutlined className="mr-[4px]" />
                {formatNumber(repo.stargazers_count)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
