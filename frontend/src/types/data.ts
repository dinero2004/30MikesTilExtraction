/**
 * Interface for image data
 */
export interface Image {
  id: number;
  url: string;
  name: string;
  user_id: number;
  news_id: number | null;
  created_at: string;
  updated_at: string;
}

/**
 * Interface for news data
 */

export interface News {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  user_id: number;
  created_at: string;
  updated_at: string;

  image_id: number | null;

  cover_image?: {
    id: number;
    url: string;
    name?: string;
  };
}

/*
 * Interface for admin user data
 */
export interface AdminUser {
  id: number;
  username: string;
  email: string;
  bio: string;
  avatar_id: number;
}
