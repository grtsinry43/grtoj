export function printGitInfo() {
  const latestTag = process.env.VERSION || "unknown";
  const commitHash = process.env.COMMITHASH || "unknown";

  console.log(
    `%c GrtOJ %c${
      latestTag === "unknown" ? "未发布" : latestTag
    } %c Commit %c${commitHash.substring(0, 7)} %c GitHub %cGrtsinry43 `,
    "background: #28a745; color: #fff; padding: 4px 8px; border-radius: 2px 0 0 2px; font-weight: bold;", // GrtOJ 样式
    "background: #fff; color: #28a745; padding: 4px 8px; border-radius: 0 2px 2px 0; font-weight: bold;", // Tag 样式，无 margin
    "background: #007bff; color: #fff; padding: 4px 8px; border-radius: 2px 0 0 2px; font-weight: bold; margin-left: 8px;", // Commit 前缀样式，左右有 margin
    "background: #fff; color: #007bff; padding: 4px 8px; border-radius: 0 2px 2px 0; font-weight: bold;", // Commit 哈希样式，无 margin
    "background: #222; color: #fff; padding: 4px 8px; border-radius: 2px 0 0 2px; font-weight: bold; margin-left: 8px;", // GitHub 前缀样式，左右有 margin
    "background: #bada55; color: #222; padding: 4px 8px; border-radius: 0 2px 2px 0; font-weight: bold;" // GitHub 账号样式，无 margin
  );
}
