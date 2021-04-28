
# <p align="center">Outsource Hub</p>

<p>
WTTB Outsource HUB will be used by production facilities within the group and also external outsourcers to dispatch jobs and manage production flow.

This application will hold all the relevant information & functionality for an production facility to Receive, Produce & Dispatch orders seamlessly without the need for manual intervention from a account handler.
</p>
<br />

## Technical Spec

### Login
- Method: `POST`
- Request
```
email=test@test.com&password=your-password
```
- Response
    - Success:
    ```JSON
    {
      success: true,
      data: 'ACCESS_TOKEN'
    }
    ```
    - Error:
    ```JSON
    {
      success: false,
      message: "Failed caused message"
    }
    ```