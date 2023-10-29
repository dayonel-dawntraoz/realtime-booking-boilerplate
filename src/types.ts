export type Item = Database["public"]["Tables"]["Items"]["Row"]

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Items: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string | null
        }
        Relationships: []
      }
      Slots: {
        Row: {
          booked_seats: number
          created_at: string
          id: string
          item_id: string | null
          key: string | null
          total_seats: number
          value: string | null
        }
        Insert: {
          booked_seats: number
          created_at?: string
          id?: string
          item_id?: string | null
          key?: string | null
          total_seats: number
          value?: string | null
        }
        Update: {
          booked_seats?: number
          created_at?: string
          id?: string
          item_id?: string | null
          key?: string | null
          total_seats?: number
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Slots_item_id_fkey"
            columns: ["item_id"]
            referencedRelation: "Items"
            referencedColumns: ["id"]
          }
        ]
      }
      "User Slots": {
        Row: {
          created_at: string
          slot_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          slot_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          slot_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "User Slots_slot_id_fkey"
            columns: ["slot_id"]
            referencedRelation: "Slots"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "User Slots_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}