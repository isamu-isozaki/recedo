# recedo
Receipt app

# planned features

- User plans
- Invitations to group
- Wishlist
- Transcribe receipt
- Memorize user preferences for each item
- Connect wishlist items to receipt items
- Compute what user owes everyone or vice versa
- Recommendation system
- Connect to instacart
- Input recipe, get ingredients
- Calory. Food recommendations for food. Weight goal
- Price change notification

# Receipt analysis framework

When checking preferences get preference of item with name with user id for all members of the group
Freq is the frequency at which the user gets the item

Endpoints:
- Getting receipt -> get items+transcribed everything
    1. When receipt is uploaded

        i. Compile image of receipt -> (currently manual)
        ii. Get receipt items -> (currently manual)
        iii. Get receipt items+quantity ->. (currently manual)
        iv. Save to receiptItems collection ->
        v. Make receipt

- Receipt remains incomplete as long as there's a receiptItem not linked to wishlistItem
    1. Get receiptItems+receipt every login(get receipt controller) -> 
    2. User sends a request with receiptItems linked to wishlistItemId ->
    3. Update receiptItems with their respective whishlistItemIds ->
    4. Once all receiptItems are set-> (check every time receipt item is updated) -> 
    5. Do the below to find amount owed

- When finding the amount owed(before the transaction is visited)

    1. Go to wishlist -> 
    2. go to wishlist items-> 
    3. get receipt items for each+preferences->
    4. divide cost by the number of people who wants it->
    5. add cost to owed->Set this as a negative transaction between person who payed and the person needing to pay
