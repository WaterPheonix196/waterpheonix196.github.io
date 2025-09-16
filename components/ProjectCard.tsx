import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl?: string;
  githubUrl: string;
  index: number;
}

export default function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-gradient-to-br from-cyan-500 to-green-500 p-[1.5px] transition-transform duration-300 hover:scale-105"
    >
      <div className="h-full w-full rounded-2xl bg-[#1E293B] p-5 flex items-center gap-4 transition-colors duration-300 group-hover:bg-[#293548]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={80} 
            height={80}
            className="rounded-lg object-cover flex-shrink-0"
          />
        ) : (
          <div className="flex-shrink-0 text-center w-[80px]"> 
            <p className="text-sm text-gray-400">Project</p>
            <p className="text-2xl font-bold text-gray-200">{index + 1}</p>
          </div>
        )}

        <div className="flex-1 self-stretch flex flex-col justify-center border-l border-slate-700 pl-4">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="mt-1 text-sm text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}