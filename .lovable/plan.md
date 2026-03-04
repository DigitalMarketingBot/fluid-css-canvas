

## Product List Page

Based on the Figma design, this is a product list page with a data table, pagination, and action buttons.

### What will be built

1. **New page: `src/pages/ProductList.tsx`** - Product List page matching the Figma design with:
   - "Product List" heading
   - "Add new product" button/section header
   - Product table with columns: No, Name (with image), Purchase Price, Sells Price, Quantity, Status, SAQ, Action (edit/delete icons)
   - 7 sample product rows (Bluetooth Devices, Airdot, Shoes, Kids T-Shirt, Smart Watch, Girls Top, Smart Watch)
   - Sells Price column highlighted in teal/primary color
   - Pagination: "Showing 1 to 10 of 400 Entries" with page numbers and Previous/Next
   - "Show X Entries" dropdown
   - Edit (green) and Delete (red) action buttons per row

2. **Update `src/App.tsx`** - Add route `/products` for the new page

3. **Update `src/components/DashboardSidebar.tsx`** - Make "Product" menu item expandable with sub-items (Brand, Category, Sub Category, Child Category, Color, Size, Add Attributes, Add Product, Product List, Discount Product, Delivery Charge) as shown in Figma. Link "product List" to `/products`.

### Technical approach
- Reuses existing `DashboardSidebar` and `DashboardHeader` layout
- Uses same sidebar + main content pattern from Index page
- Table built with Tailwind-styled HTML table (no external libs per constraints)
- Pagination is client-side with state management
- Product data is mock/static arrays
- Mobile responsive: table scrolls horizontally on small screens

