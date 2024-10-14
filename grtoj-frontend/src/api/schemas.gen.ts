// This file is auto-generated by @hey-api/openapi-ts

export const BaseResponse_LoginUserVO_Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      originalRef: "LoginUserVO",
      $ref: "#/definitions/LoginUserVO",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«LoginUserVO»",
} as const;

export const BaseResponse_Page_PostVO__Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      originalRef: "Page«PostVO»",
      $ref: "#/definitions/Page«PostVO»",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«Page«PostVO»»",
} as const;

export const BaseResponse_Page_Post__Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      originalRef: "Page«Post»",
      $ref: "#/definitions/Page«Post»",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«Page«Post»»",
} as const;

export const BaseResponse_Page_UserVO__Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      originalRef: "Page«UserVO»",
      $ref: "#/definitions/Page«UserVO»",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«Page«UserVO»»",
} as const;

export const BaseResponse_Page_User__Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      originalRef: "Page«User»",
      $ref: "#/definitions/Page«User»",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«Page«User»»",
} as const;

export const BaseResponse_PostVO_Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      originalRef: "PostVO",
      $ref: "#/definitions/PostVO",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«PostVO»",
} as const;

export const BaseResponse_UserVO_Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      originalRef: "UserVO",
      $ref: "#/definitions/UserVO",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«UserVO»",
} as const;

export const BaseResponse_User_Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      originalRef: "User",
      $ref: "#/definitions/User",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«User»",
} as const;

export const BaseResponse_boolean_Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      type: "boolean",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«boolean»",
} as const;

export const BaseResponse_int_Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      type: "integer",
      format: "int32",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«int»",
} as const;

export const BaseResponse_long_Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      type: "integer",
      format: "int64",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«long»",
} as const;

export const BaseResponse_string_Schema = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int32",
    },
    data: {
      type: "string",
    },
    message: {
      type: "string",
    },
  },
  title: "BaseResponse«string»",
} as const;

export const DeleteRequestSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
    },
  },
  title: "DeleteRequest",
} as const;

export const LoginUserVOSchema = {
  type: "object",
  properties: {
    createTime: {
      type: "string",
      format: "date-time",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    updateTime: {
      type: "string",
      format: "date-time",
    },
    userAvatar: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    userProfile: {
      type: "string",
    },
    userRole: {
      type: "string",
    },
  },
  title: "LoginUserVO",
} as const;

export const OrderItemSchema = {
  type: "object",
  properties: {
    asc: {
      type: "boolean",
    },
    column: {
      type: "string",
    },
  },
  title: "OrderItem",
} as const;

export const Page_PostVO_Schema = {
  type: "object",
  properties: {
    countId: {
      type: "string",
    },
    current: {
      type: "integer",
      format: "int64",
    },
    maxLimit: {
      type: "integer",
      format: "int64",
    },
    optimizeCountSql: {
      type: "boolean",
    },
    orders: {
      type: "array",
      items: {
        originalRef: "OrderItem",
        $ref: "#/definitions/OrderItem",
      },
    },
    pages: {
      type: "integer",
      format: "int64",
    },
    records: {
      type: "array",
      items: {
        originalRef: "PostVO",
        $ref: "#/definitions/PostVO",
      },
    },
    searchCount: {
      type: "boolean",
    },
    size: {
      type: "integer",
      format: "int64",
    },
    total: {
      type: "integer",
      format: "int64",
    },
  },
  title: "Page«PostVO»",
} as const;

export const Page_Post_Schema = {
  type: "object",
  properties: {
    countId: {
      type: "string",
    },
    current: {
      type: "integer",
      format: "int64",
    },
    maxLimit: {
      type: "integer",
      format: "int64",
    },
    optimizeCountSql: {
      type: "boolean",
    },
    orders: {
      type: "array",
      items: {
        originalRef: "OrderItem",
        $ref: "#/definitions/OrderItem",
      },
    },
    pages: {
      type: "integer",
      format: "int64",
    },
    records: {
      type: "array",
      items: {
        originalRef: "Post",
        $ref: "#/definitions/Post",
      },
    },
    searchCount: {
      type: "boolean",
    },
    size: {
      type: "integer",
      format: "int64",
    },
    total: {
      type: "integer",
      format: "int64",
    },
  },
  title: "Page«Post»",
} as const;

export const Page_UserVO_Schema = {
  type: "object",
  properties: {
    countId: {
      type: "string",
    },
    current: {
      type: "integer",
      format: "int64",
    },
    maxLimit: {
      type: "integer",
      format: "int64",
    },
    optimizeCountSql: {
      type: "boolean",
    },
    orders: {
      type: "array",
      items: {
        originalRef: "OrderItem",
        $ref: "#/definitions/OrderItem",
      },
    },
    pages: {
      type: "integer",
      format: "int64",
    },
    records: {
      type: "array",
      items: {
        originalRef: "UserVO",
        $ref: "#/definitions/UserVO",
      },
    },
    searchCount: {
      type: "boolean",
    },
    size: {
      type: "integer",
      format: "int64",
    },
    total: {
      type: "integer",
      format: "int64",
    },
  },
  title: "Page«UserVO»",
} as const;

export const Page_User_Schema = {
  type: "object",
  properties: {
    countId: {
      type: "string",
    },
    current: {
      type: "integer",
      format: "int64",
    },
    maxLimit: {
      type: "integer",
      format: "int64",
    },
    optimizeCountSql: {
      type: "boolean",
    },
    orders: {
      type: "array",
      items: {
        originalRef: "OrderItem",
        $ref: "#/definitions/OrderItem",
      },
    },
    pages: {
      type: "integer",
      format: "int64",
    },
    records: {
      type: "array",
      items: {
        originalRef: "User",
        $ref: "#/definitions/User",
      },
    },
    searchCount: {
      type: "boolean",
    },
    size: {
      type: "integer",
      format: "int64",
    },
    total: {
      type: "integer",
      format: "int64",
    },
  },
  title: "Page«User»",
} as const;

export const PostSchema = {
  type: "object",
  properties: {
    content: {
      type: "string",
    },
    createTime: {
      type: "string",
      format: "date-time",
    },
    favourNum: {
      type: "integer",
      format: "int32",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    isDelete: {
      type: "integer",
      format: "int32",
    },
    tags: {
      type: "string",
    },
    thumbNum: {
      type: "integer",
      format: "int32",
    },
    title: {
      type: "string",
    },
    updateTime: {
      type: "string",
      format: "date-time",
    },
    userId: {
      type: "integer",
      format: "int64",
    },
  },
  title: "Post",
} as const;

export const PostAddRequestSchema = {
  type: "object",
  properties: {
    content: {
      type: "string",
    },
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
    title: {
      type: "string",
    },
  },
  title: "PostAddRequest",
} as const;

export const PostEditRequestSchema = {
  type: "object",
  properties: {
    content: {
      type: "string",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
    title: {
      type: "string",
    },
  },
  title: "PostEditRequest",
} as const;

export const PostFavourAddRequestSchema = {
  type: "object",
  properties: {
    postId: {
      type: "integer",
      format: "int64",
    },
  },
  title: "PostFavourAddRequest",
} as const;

export const PostFavourQueryRequestSchema = {
  type: "object",
  properties: {
    current: {
      type: "integer",
      format: "int32",
    },
    pageSize: {
      type: "integer",
      format: "int32",
    },
    postQueryRequest: {
      originalRef: "PostQueryRequest",
      $ref: "#/definitions/PostQueryRequest",
    },
    sortField: {
      type: "string",
    },
    sortOrder: {
      type: "string",
    },
    userId: {
      type: "integer",
      format: "int64",
    },
  },
  title: "PostFavourQueryRequest",
} as const;

export const PostQueryRequestSchema = {
  type: "object",
  properties: {
    content: {
      type: "string",
    },
    current: {
      type: "integer",
      format: "int32",
    },
    favourUserId: {
      type: "integer",
      format: "int64",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    notId: {
      type: "integer",
      format: "int64",
    },
    orTags: {
      type: "array",
      items: {
        type: "string",
      },
    },
    pageSize: {
      type: "integer",
      format: "int32",
    },
    searchText: {
      type: "string",
    },
    sortField: {
      type: "string",
    },
    sortOrder: {
      type: "string",
    },
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
    title: {
      type: "string",
    },
    userId: {
      type: "integer",
      format: "int64",
    },
  },
  title: "PostQueryRequest",
} as const;

export const PostThumbAddRequestSchema = {
  type: "object",
  properties: {
    postId: {
      type: "integer",
      format: "int64",
    },
  },
  title: "PostThumbAddRequest",
} as const;

export const PostUpdateRequestSchema = {
  type: "object",
  properties: {
    content: {
      type: "string",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
    title: {
      type: "string",
    },
  },
  title: "PostUpdateRequest",
} as const;

export const PostVOSchema = {
  type: "object",
  properties: {
    content: {
      type: "string",
    },
    createTime: {
      type: "string",
      format: "date-time",
    },
    favourNum: {
      type: "integer",
      format: "int32",
    },
    hasFavour: {
      type: "boolean",
    },
    hasThumb: {
      type: "boolean",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    tagList: {
      type: "array",
      items: {
        type: "string",
      },
    },
    thumbNum: {
      type: "integer",
      format: "int32",
    },
    title: {
      type: "string",
    },
    updateTime: {
      type: "string",
      format: "date-time",
    },
    user: {
      originalRef: "UserVO",
      $ref: "#/definitions/UserVO",
    },
    userId: {
      type: "integer",
      format: "int64",
    },
  },
  title: "PostVO",
} as const;

export const UserSchema = {
  type: "object",
  properties: {
    createTime: {
      type: "string",
      format: "date-time",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    isDelete: {
      type: "integer",
      format: "int32",
    },
    mpOpenId: {
      type: "string",
    },
    unionId: {
      type: "string",
    },
    updateTime: {
      type: "string",
      format: "date-time",
    },
    userAccount: {
      type: "string",
    },
    userAvatar: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    userPassword: {
      type: "string",
    },
    userProfile: {
      type: "string",
    },
    userRole: {
      type: "string",
    },
  },
  title: "User",
} as const;

export const UserAddRequestSchema = {
  type: "object",
  properties: {
    userAccount: {
      type: "string",
    },
    userAvatar: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    userRole: {
      type: "string",
    },
  },
  title: "UserAddRequest",
} as const;

export const UserLoginRequestSchema = {
  type: "object",
  properties: {
    userAccount: {
      type: "string",
    },
    userPassword: {
      type: "string",
    },
  },
  title: "UserLoginRequest",
} as const;

export const UserQueryRequestSchema = {
  type: "object",
  properties: {
    current: {
      type: "integer",
      format: "int32",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    mpOpenId: {
      type: "string",
    },
    pageSize: {
      type: "integer",
      format: "int32",
    },
    sortField: {
      type: "string",
    },
    sortOrder: {
      type: "string",
    },
    unionId: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    userProfile: {
      type: "string",
    },
    userRole: {
      type: "string",
    },
  },
  title: "UserQueryRequest",
} as const;

export const UserRegisterRequestSchema = {
  type: "object",
  properties: {
    checkPassword: {
      type: "string",
    },
    userAccount: {
      type: "string",
    },
    userPassword: {
      type: "string",
    },
  },
  title: "UserRegisterRequest",
} as const;

export const UserUpdateMyRequestSchema = {
  type: "object",
  properties: {
    userAvatar: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    userProfile: {
      type: "string",
    },
  },
  title: "UserUpdateMyRequest",
} as const;

export const UserUpdateRequestSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
    },
    userAvatar: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    userProfile: {
      type: "string",
    },
    userRole: {
      type: "string",
    },
  },
  title: "UserUpdateRequest",
} as const;

export const UserVOSchema = {
  type: "object",
  properties: {
    createTime: {
      type: "string",
      format: "date-time",
    },
    id: {
      type: "integer",
      format: "int64",
    },
    userAvatar: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    userProfile: {
      type: "string",
    },
    userRole: {
      type: "string",
    },
  },
  title: "UserVO",
} as const;
