/**
 * Interface for image data
 */
export interface Image {
  id: number;
  url: string;
  name: string;
  user_id: number;
  article_id: number | null;
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
  image_url: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

/*
 * Interface for public user data
 */
export interface PublicUser {
  id: number;
  username: string;
  bio: string;
  avatar_id: number;
}
