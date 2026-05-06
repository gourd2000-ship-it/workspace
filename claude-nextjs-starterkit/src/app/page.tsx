"use client";

import { useState } from "react";
import { Boxes, Palette, Zap } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

const features = [
  {
    icon: Zap,
    title: "Next.js 15 App Router",
    description:
      "최신 App Router와 React Server Components로 빠르고 SEO 친화적인 앱을 구축하세요.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description:
      "CSS-first 설정 방식으로 config 파일 없이 @theme 토큰으로 디자인 시스템을 관리합니다.",
  },
  {
    icon: Boxes,
    title: "shadcn/ui + lucide-react",
    description:
      "접근성을 갖춘 shadcn 컴포넌트와 lucide 아이콘으로 빠르게 UI를 완성하세요.",
  },
];

const stacks = ["Next.js v15", "TypeScript", "Tailwind v4", "shadcn/ui"];

export default function Home() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("알림 신청 완료!", {
      description: `${email || "입력한 이메일"}로 소식을 보내드립니다.`,
    });
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Next.js Starter Kit
          </span>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-16 px-6 py-16">
        {/* Hero */}
        <section className="space-y-4 text-center">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {stacks.map((badge) => (
              <span
                key={badge}
                className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            웹 개발을 빠르게 시작하세요
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            프로덕션 준비가 된 Next.js 스타터 킷입니다. 다크 모드, 컴포넌트
            라이브러리, 타입 안전성이 모두 준비되어 있습니다.
          </p>
        </section>

        {/* 기능 카드 */}
        <section className="grid gap-4 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="size-5 text-muted-foreground" />
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* 폼 데모 */}
        <section className="mx-auto max-w-md space-y-4">
          <h2 className="text-center text-xl font-semibold">컴포넌트 데모</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">알림 신청</CardTitle>
              <CardDescription>
                이메일을 입력하고 버튼을 눌러 toast 알림을 확인하세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  신청하기
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="mt-16 border-t">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-sm text-muted-foreground">
          <p>
            컴포넌트 추가:{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              npx shadcn@latest add &lt;component&gt;
            </code>
          </p>
          <p>다크 모드 토큰은 globals.css에서 커스터마이징하세요.</p>
        </div>
      </footer>
    </div>
  );
}
