export type TeamRole = "owner" | "admin" | "member";

export interface Team {
  id: number;
  name: string;
  slug: string;
  isPersonal: boolean;
  role?: TeamRole;
  roleLabel?: string;
  isCurrent?: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  email: string;
  avatar?: string | null;
  role: TeamRole;
  role_label: string;
}

export interface TeamInvitation {
  code: string;
  email: string;
  role: TeamRole;
  role_label: string;
  created_at: string;
}

export interface TeamPermissions {
  canUpdateTeam: boolean;
  canDeleteTeam: boolean;
  canAddMember: boolean;
  canUpdateMember: boolean;
  canRemoveMember: boolean;
  canCreateInvitation: boolean;
  canCancelInvitation: boolean;
}

export interface RoleOption {
  value: TeamRole;
  label: string;
}
