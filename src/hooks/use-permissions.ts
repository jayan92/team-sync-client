import { useEffect, useMemo, useState } from "react";
import { PermissionType } from "@/constant";
import { UserType, WorkspaceWithMembersType } from "@/types/api.type";

const usePermissions = (
  user: UserType | undefined,
  workspace: WorkspaceWithMembersType | undefined
) => {
  const [permissions, setPermissions] = useState<PermissionType[]>([]);

  useEffect(() => {
    if (user && workspace) {
      const member = workspace.members.find((member) => {
        const userId = member.userId as any;
        if (typeof userId === "string") return userId === user._id;
        return userId?._id === user._id;
      });

      if (member) setPermissions(member.role.permissions);
    }
  }, [user, workspace]);

  return useMemo(() => permissions, [permissions]);
};

export default usePermissions;
