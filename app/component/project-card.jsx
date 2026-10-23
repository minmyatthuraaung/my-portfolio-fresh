import { ArrowUpRight, Code2 } from "lucide-react";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectCard({ project }) {
  const { title, description, image, stack, demo, github } = project;

  return (
    <Card className="group w-full gap-0 overflow-hidden rounded-3xl border border-white/10 bg-[#101116] py-0 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/25 hover:shadow-[0_28px_70px_rgba(124,58,237,0.12)]">
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-slate-900">
        <NextImage
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 448px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#101116]/40 via-transparent to-white/4" />
      </div>

      <CardHeader className="gap-3 px-5 pt-5 sm:px-6 sm:pt-6">
        <CardTitle className="font-heading text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
          {title}
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-slate-400 sm:text-[0.9375rem]">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-5 pt-5 sm:px-6">
        <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          <Code2 aria-hidden="true" className="h-3.5 w-3.5 text-sky-300" />
          Tech stack
        </div>
        <ul className="flex flex-wrap gap-2">
          {stack.map((technology) => (
            <li
              key={technology}
              className="w-fit rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              {technology}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2 border-0 bg-transparent px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
        <Button
          nativeButton={false}
          render={<a href={demo} target="_blank" rel="noopener noreferrer" />}
          variant="outline"
          className="h-10 rounded-xl border-white/10 bg-white/3 text-slate-200 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
        >
          Demo
          <ArrowUpRight aria-hidden="true" className="ml-1 h-4 w-4" />
        </Button>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white px-4 text-sm font-semibold text-[#101116] shadow-[0_4px_18px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
        >
          GitHub
        </a>
      </CardFooter>
    </Card>
  );
}
