import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  date: string;
  body: string;
  imageUrl?: string; // Optional because you might have an interactive component instead
  tags: string[];
  ContentComponent?: React.ElementType; // For the interactive component
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  date,
  body,
  imageUrl,
  tags,
  ContentComponent,
}) => {
  return (
    <Link href={`/projects/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-500">
        <div className="px-6 py-4">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={250}
              className="w-full"
            />
          )}
          {ContentComponent && <ContentComponent />}
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-300 text-xs">{date}</p>
          <p className="text-gray-100 text-base">{body}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
