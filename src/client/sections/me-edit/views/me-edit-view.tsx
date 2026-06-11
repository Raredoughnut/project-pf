"use client";

import type { MeEditVM } from "@/src/client/sections/me-edit/use-me-edit-vm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { EditorSection } from "../components/editor-section";

export type MeEditViewProps = MeEditVM;

export function MeEditView({
  form,
  profile,
  isSaving,
  nicknameMaxLength,
  onSave,
  onCancel,
}: MeEditViewProps) {
  return (
    <div className="p-6">
      <h2 className="font-display font-medium text-2xl tracking-tight m-0 mb-1">
        프로필 편집
      </h2>
      <p className="text-[13px] text-muted-foreground m-0 mb-5">
        변경사항은 저장 버튼을 누를 때까지 반영되지 않습니다.
      </p>

      <EditorSection
        label="헤더 이미지"
        trailing={
          <Button variant="outline" size="sm">
            변경
          </Button>
        }
      >
        <div
          className="h-20 rounded-lg"
          style={{ background: profile.headerBackground }}
        />
        <p className="text-[13px] text-muted-foreground mt-1.5">
          1500 × 500 권장
        </p>
      </EditorSection>

      <EditorSection
        label="프로필 이미지"
        trailing={
          <Button variant="outline" size="sm">
            변경
          </Button>
        }
      >
        <div className="flex items-center gap-3">
          <Avatar
            size="md"
            fallback={profile.avatarText}
            className="text-white"
            style={{ background: profile.avatarColor }}
          />
          <p className="text-[13px] text-muted-foreground">400 × 400 권장</p>
        </div>
      </EditorSection>

      <form.Field name="displayName">
        {(field) => (
          <EditorSection
            label="닉네임"
            trailing={
              <span className="text-xs text-muted-foreground">
                {field.state.value.length}/{nicknameMaxLength}
              </span>
            }
          >
            <Input
              value={field.state.value}
              maxLength={nicknameMaxLength}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
          </EditorSection>
        )}
      </form.Field>

      <form.Field name="handle">
        {(field) => (
          <EditorSection
            label="X 계정 아이디"
            trailing={<Badge variant="mint">✓ 인증됨</Badge>}
          >
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
          </EditorSection>
        )}
      </form.Field>

      <form.Field name="bio">
        {(field) => (
          <EditorSection label="자기소개" align="start">
            <Textarea
              rows={3}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
          </EditorSection>
        )}
      </form.Field>

      <div className="flex gap-2 justify-end mt-5">
        <Button variant="ghost" onClick={onCancel} disabled={isSaving}>
          취소
        </Button>
        <Button variant="accent" onClick={onSave} disabled={isSaving}>
          {isSaving ? "저장 중…" : "저장"}
        </Button>
      </div>
    </div>
  );
}
