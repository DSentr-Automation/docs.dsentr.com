---
title: Google Sheets
sidebar_position: 6
---

# Google Sheets

> **Workspace Plan Only**  
> The Google Sheets integration is available exclusively to Workspace plan users.

The **Google Sheets** node allows your workflows to insert new rows into a Google Sheet using data generated from previous nodes.  
Each execution appends data to the next available empty row—perfect for logging results, form submissions, or workflow output.

![alt text]({1ECF4BD9-6BC5-45B1-AA78-C03351425E05}.png)

---

## Overview

This node connects directly to Google Sheets through an OAuth integration. Once connected, DSentr can write data automatically to your chosen spreadsheet and worksheet.  
Every run appends a new row rather than overwriting existing data, ensuring each workflow result is preserved chronologically.

---

## Configuration

### OAuth Account  
Select a Google personal or workspace account authorized in **Settings → Integrations**.  
This connection must have spreadsheet editing permissions granted during the Google OAuth flow.  

**Required**

---

### Spreadsheet ID  
The unique identifier of the target spreadsheet.  
You can find it in your spreadsheet’s URL between `/d/` and `/edit`.  

Example:  
`https://docs.google.com/spreadsheets/d/1ABC123xyz456def7890/edit` → ID = `1ABC123xyz456def7890`  

The spreadsheet must be owned by, or shared with, the connected OAuth account.  

**Required**

---

### Worksheet Name  
The name of the sheet (tab) inside the spreadsheet where rows will be inserted.  

**Required**

---

### Column Mappings  
Define what data is written to which columns.  
Each mapping consists of a lowercase column letter (e.g. `a`, `b`, `c`) and a value or variable.  

Example:  
- `a` → `test`  
- `b` → `{{trigger.name}}`  
- `c` → `{{action.result}}`  

At least one valid mapping is required.  
Values can be static text or dynamic variables from previous workflow nodes.

---

## Behavior

Each time the node runs, DSentr appends the specified values to the **next empty row** in the target worksheet.  
Existing rows are never modified, regardless of which columns are mapped.  

Changing the mappings later only affects which columns receive data—not where the next row is placed.  

This ensures your data remains orderly, consistent, and predictable across workflow runs.

---

## OAuth Permissions

During OAuth setup in **Settings → Integrations**, Google prompts for permissions that allow DSentr to **view and edit spreadsheets**.  
You must check this box when connecting your account—without it, DSentr cannot write data.

![alt text]({488D48B0-3E19-4E21-A4E8-D7F2D718824C}.png)

---

## Google Workspace Setup

Your Google Workspace must permit API access to Sheets for connected third-party apps.  
If the Sheets node fails to write data, confirm with your workspace administrator that:  

- **Google Sheets API** is enabled.  
- The DSentr OAuth client is approved under **App Access Control**.  

For more details:  
[Enable the Google Sheets API ›](https://developers.google.com/workspace/sheets/api/quickstart/js#enable_the_api)  
[Manage App Access in Google Workspace ›](https://support.google.com/a/answer/6328676?hl=en)

---

## Example

| A | B | C |
|---|---|---|
| test | `{{trigger.name}}` | `{{action.result}}` |
| test | John | Success |

Each workflow run adds a new row automatically, preserving previous entries.

---

## Tips

- If multiple workflow runs write to the same sheet simultaneously, Google’s API ensures atomic inserts—but near-simultaneous runs may appear out of order.  
- For guaranteed sequence ordering, add a timestamp column or serialize executions.  
- Keep your OAuth connections active; expired tokens will cause write failures.  
- To write to multiple worksheets, use separate nodes or dynamic worksheet names.

---

The **Google Sheets** node makes it simple to store structured workflow data where your team already works—right inside Google Workspace.
