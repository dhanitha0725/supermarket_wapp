# Supermarket System Requirements

## Core Purpose
A simple catalog and ordering system for a local supermarket. This is strictly a customer-facing menu and order intake tool, **not** an inventory management system. 

## 1. Product Management (Admin)
- Admins can add, edit, and disable products.
- Each product must have a name, price, and category.
- Products can optionally have a discount or special offer.
- **Dynamic Category Information:** Products store category-specific metadata.
  - *Example:* Fruits and vegetables track `weight` (e.g., 1kg).
  - *Example:* Beverages track `volume` (e.g., 500ml).
- **Image Handling:** Product images are uploaded to a Cloud Storage provider (e.g., Cloudinary/AWS S3). The system only stores the secure URL returned by the provider.

## 2. Customer Workflow & Ordering
- Customers browse available products and add items to a cart.
- Customers proceed to checkout by providing their basic details (Name, Phone, Delivery Address).
- **No Online Payments:** The system will not integrate with Stripe, PayPal, or any payment gateway. Payments are handled physically/out-of-band upon delivery or pickup.

## 3. Order Processing & WhatsApp Integration
- **Database Save:** When the customer completes checkout, the order is immediately saved to the database. This allows it to appear in the Admin Portal for tracking.
- **WhatsApp Click-to-Chat:** After saving, the frontend generates a WhatsApp Web/App redirect link. This link opens the customer's WhatsApp with a pre-filled message detailing their order summary, sending it directly to the Admin's configured WhatsApp number.
- **Admin Portal Notifications:** The saved order triggers a notification in the Admin Portal. The admin can view the order under the "Orders" tab.
- **Status Updates:** The Admin cross-references the incoming WhatsApp message with the Admin Portal order. The Admin can manually update the status of the order (Pending -> Confirmed -> Processed).
- **No Physical Tracking:** The system does not integrate with delivery drivers or live map tracking.

## 4. Technical Constraints
- **Database:** PostgreSQL.
- **Metadata Storage:** Use PostgreSQL's `JSONB` column type for the category-specific dynamic fields.
- **Primary Keys:** UUIDs for all database records.
