import { StarOutlined } from "@ant-design/icons";

import Card from "@/components/atoms/Card";
import Chip from "@/components/atoms/Chip";
import Link from "@/components/atoms/Link";
import { formatNumber } from "@/utils/formatNumberStars";

interface RepoItemProps {
  name: string;
  description: string;
  url: string;
  language: string;
  avatar?: string;
  topics?: string[];
  stars?: number;
  lastUpdate?: string;
}

const formateDate = (date: string = "") => {
  const lastUpdate = date ? new Date(date) : new Date();
  const today = new Date();
  const secondsDiff = (today.getTime() - lastUpdate.getTime()) / 1000;

  if (secondsDiff >= 86400 && secondsDiff < 172800) return "Updated yesterday";

  if (secondsDiff < 86400) {
    if (secondsDiff < 60)
      return `Updated ${secondsDiff} second${secondsDiff > 1 ? "s" : ""} ago`;
    const minutes = Math.floor(secondsDiff / 60);
    if (minutes < 60)
      return `Updated ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    const hours = Math.floor(secondsDiff / 3600);
    return `Updated ${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  if (lastUpdate.getFullYear() === today.getFullYear())
    return `Update on ${lastUpdate.toLocaleDateString("es-mx", {
      day: "numeric",
      month: "short",
    })}`;
  return `Update on ${lastUpdate.toLocaleDateString("es-mx", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}`;
};

export default function RepoItem(props: RepoItemProps) {
  const {
    name,
    description,
    topics,
    url,
    avatar,
    language,
    lastUpdate,
    stars = 0,
  } = props;

  return (
    <Card type="rest" className="w-full border-2 border-gray-200">
      <div key={name} className="flex flex-row gap-[12px] h-full">
        <img
          src={`${avatar}&s=32`}
          alt={name}
          width={32}
          height={32}
          loading="lazy"
          className="h-[32px] self-start rounded-full"
        />
        <div className="flex flex-col min-w-[0] justify-between	">
          <div className="flex flex-row place-content-between">
            <Link
              href={url}
              target="_blank"
              className="overflow-hidden whitespace-nowrap text-ellipsis"
            >
              {name}
            </Link>
          </div>
          <p className="text-xs py-[4px] max-h-[54px] overflow-hidden flex-1">{description}</p>
          <div className={`flex sm:flex-row items-start gap-[8px]${!topics?.length ? 'hidden': ''}`}>
            {topics?.map((topic, index) => (
              <Chip
                key={topic}
                label={topic}
                className={`mb-[4px] ${index > 1 ? "hidden sm:block" : ""}`}
              />
            ))}
          </div>
          <div className="flex mt-[4px] flex-row gap-[12px] text-xs text-gray-500">
            <p>{language}</p>
            <span className="hidden sm:block">
              <StarOutlined className="mr-[4px]" />
              {formatNumber(stars)}
            </span>
            <p>{formateDate(lastUpdate)}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
