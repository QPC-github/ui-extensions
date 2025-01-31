export interface Session {
  /**
   * The shop ID associated with the shop currently logged into POS.
   */
  shopId: number;

  /**
   * The user ID associated with the Shopify account currently authenticated on POS.
   */
  userId: number;

  /**
   * The location ID associated with the POS' current location.
   */
  locationId: number;

  /**
   * The staff ID who is currently pinned into the POS.
   * Note that this staff member ID may be different to the User ID, as the staff member who enters their PIN may be different to the User who logged onto POS.
   */
  staffMemberId?: number;
}
