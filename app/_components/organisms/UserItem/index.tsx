import Card from "@/components/atoms/Card";

interface RepoItemProps {
  name: string
  url: string
  avatar?: string
}

export default function UserItem(props: RepoItemProps) {
  const {
    name,
    url,
    avatar
  } = props

  return (
    <Card type="rest" className="w-full border-2 border-gray-200">
      <div key={name} className="flex flex-row gap-[12px]">
        <img
          src={avatar}
          alt={name}
          width={32}
          height={32}
          loading="lazy"
          className="h-[32px] self-center rounded-full"
        />
        <div className="flex flex-col min-w-[0] justify-center">
          <div className="flex flex-row place-content-between">
            <a href={url} target="_blank" className="hover:underline text-blue-600 visited:text-purple-600">{name}</a>
          </div>
        </div>
      </div>
    </Card>
  )
}
