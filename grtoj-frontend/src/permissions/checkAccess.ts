import type { User } from "@/store/modules/user";
import ACCESS_ENUM from "@/permissions/accessEnum";

/**
 * 统一的权限检查方法
 * @param loginUser - 当前登录用户
 * @param needAccess - 需要的权限
 * @returns 是否有权限
 */
const checkAccess = (
  loginUser: User,
  needAccess = ACCESS_ENUM.NOT_LOGIN
): boolean => {
  // 获取当前登录用户的权限，如果没有登录则默认为未登录
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  if (needAccess === ACCESS_ENUM.USER) {
    // 如果需要的权限是用户权限，只要登录了就可以
    return loginUserAccess !== ACCESS_ENUM.NOT_LOGIN;
  }
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // 如果需要的权限是管理员权限，只有管理员可以
    return loginUserAccess === ACCESS_ENUM.ADMIN;
  }
  return true;
};

export default checkAccess;
