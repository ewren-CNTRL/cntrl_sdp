# What Is Request Life Cycle?

Request Life Cycle in ServiceDesk Plus allows admins to formulate a request resolution process with built-in guidance for the help desk technician. Through a simple drag and drop process, the SDAdmin can create a visual process builder and define the resolution process. You can create, discuss, and rework the process drafts before publishing the life cycle. 

[Request Life Cycle Overview: Video](https://www.youtube.com/watch?v=9YFaDTvuBVY)  
 

Define life cycles for processes specific to your organization and associate with incident or service templates. For example, you can define a life cycle for any asset request and associate it with service templates configured for laptop, mobile phones, or any hardware requests.

You can associate one life cycle with multiple templates, but you can associate a template with only one life cycle. 

A life cycle ensures efficient process adherence; you can establish a directional flow, minimize the scope for human errors, and provide privileged (role-based) access to status transitions. 

Using the Request Life Cycle feature, you can provide adequate guidance to the technician to resolve the assigned requests. When a life cycle is configured to a request template, only the next possible transitions and the allowed status/es will be available for the technician to choose from.

In the absence of a life cycle, as shown in Fig. 1, the technician can choose any status, which could lead to incorrect customer notifications on the request status. That is, for a request that is temporarily put on hold, if the technician chooses Closed, instead of Onhold, the customer might receive an incorrect (closed) notification for the request logged. 

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/Without%20Life%20Cycle.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL1dpdGhvdXQlMjBMaWZlJTIwQ3ljbGUucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzU2MjU4OTgyfX19XX0_&Signature=KgJfxslEmvTBk2WrkNG7YMNR-INsnc8wNdEazcor7m7D7CESj0TEp3m114N5ln9gBug7iC-n1HZakLCBK9aZGXGUZvnqdUBYUPq14~oia1w2uymBf3veYPbJ8qVrnxTgr828k~mnWk9MPW7FJ9QXuBbRUyjQ2DK9ABMvzb8VfWV-3jUS-JoGRT-UFYyJKezCJEjcJ7bcF0VCEl-A2-c1QhgfMzfmUKGxLQTNajB839G5xUSpLpUourKDLVrWZWKbOu7nXOH0mYQ6gU7IjcO~218lAnMmk3OkIglB5hhzKjLYhUgjmBAbIwlhWbIRRSnfatvGcrFJ1NvTQf6MC-dV9w__&Key-Pair-Id=K2TK3EG287XSFC)

On the other hand, using the life cycle, admins can control the status/es (Fig. 2) that a technician can choose from, ensuring status accuracy and correct customer communication. Moreover, admins can also configure the next possible transitions for each status. This will provide the much-needed guidance for the technician, and you can ensure process adherence and reduce any scope for process violation.

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/WithRLC.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL1dpdGhSTEMucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzU2MjU4OTgyfX19XX0_&Signature=Zao3X1gcqvfgwAj68sI6ru9EGau2XC7YiFxKU75AWqGivmSpI042yutCQn~iLJq~MDUOzKdw1P9dauUm943zaTss~y3af8wVHt0xjNOZKW6FWUqg9y1Ns08hm3YYOU1-PqIsVIH7OW2Ce9xkl4FIisx7TsLrWN9q53D1StuiwNS8q0GixMfeina5lmDGq-NFpc8q76dDlxSOT7wi03p5RqwfmNmdy-C-psbrhBUjuGHGGhtfaJdO1nbO-yEIViw9yFJFpHzFqIpnkXDHOgoZgbfGANQ8z2b8BtglB5IhN9mFDgX2fRrR3cj4Pom-aHDYQwYrbKhEc3BuWQ2mflu3Bg__&Key-Pair-Id=K2TK3EG287XSFC)

To know more about configuring the life cycle, you can sequentially go through this document or click appropriate sections from the following links:

- #### **[Request Life Cycle Terminology](https://help.servicedeskplus.com/what-is-request-life-cycle$Request%20Life%20Cycle%20Terms)**
    
- #### **[Configuring Request Life Cycle](https://help.servicedeskplus.com/what-is-request-life-cycle$Configuring%20Request%20Life%20Cycle)**
    
- #### **[Life Cycle Status Modifications](https://help.servicedeskplus.com/what-is-request-life-cycle$Life%20Cycle%20Status%20Modifications)**
    
- #### **[Linear and Graphical Views](https://help.servicedeskplus.com/what-is-request-life-cycle$Linear%20and%20Graphical%20Views)**
    
- #### **[Editing a Life Cycle](https://help.servicedeskplus.com/what-is-request-life-cycle$Editing%20a%20Life%20Cycle)**
    
- #### **[Request Life Cycle List View](https://help.servicedeskplus.com/what-is-request-life-cycle$Request%20Life%20Cycle%20List%20View)**
    
- #### **[Request Life Cycle: Summary](https://help.servicedeskplus.com/what-is-request-life-cycle$RLC%20Summary)**
    

## **Request Life Cycle Terminology**

Before you configure the request life cycle, familiarize yourself with the following terms:

**Status** is the actual state of the incoming request. For example, all logged in requests are in the **Open** status while all requests that are waiting for updates will be in the **On-Hold** status. The life cycle includes Stop-Timer status/es as well.

You can configure these statuses under **Admin>** Automation **(Help Desk Customizer** in old UI**) > Status**. 

**Transition** refers to the actual movement of the request from one state to another. A transition is further divided into Before, During, and After. Under each phase, you can configure various settings to control the status movement of the request and also configure specific settings such as provide privileged access, customize notifications, mandate fields, and execute rules on the fulfillment of specified criteria.

You can also configure various actions under each transition. For example, you can execute scripts for specific actions, negate the process, or send notifications. These are transition actions.

**Start/End Block:** These are representative of the initial or the final phase of the request. They are not status/es; they can be connected to active statuses such as Open/Assigned or Completed/Closed. During request creation, only the status/es connected to the start block will be shown in the Request Details page to the technician. 

**Before**: This refers to the phase before a transition occurs and the request can move into a status. This phase has two configuration settings, roles and rules. Under roles, you can restrict  transition access to specific technicians. For example, if only the assigned technician/s can move the request into the In-Progress status, you can select the roles ($Ticket_owner or $Group_members) accordingly. Under such a configuration, you'll make the transition visible only to a specific technician or to the technicians in the specified support group. Under **rules**, you define the criteria for the request to move into the status. The criteria defines whether the transition will be shown to the technician. For example, you can define the Approval Status criteria as Approved. That is, only if the Approval Status of the request is **approved**, the next transition, say **Assigned** is shown in the Request Details page to the technician.

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/Before_Transition\(2\).png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL0JlZm9yZV9UcmFuc2l0aW9uKDIpLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc1NjI1ODk4Mn19fV19&Signature=UqcGHeyLgLLUfS8mJ5wFkOYRbiNMbiEOmgJfzwyoc1kay2zejpNkTJw2w8PlfKZ46cpfy6vX2hd-JVcoFm0k628Fr6v6O3NsTDJ~OrlAFwZmw~WT88eLk07zSn~UX4SWDmHGo5TJpNu6cRdnQ4e5ZmwBJf3W6FCcZe2JOmgVmjbd4~61MpR7fcg5vr16oRmObPwGnHTo8l5hIiTXHXNUKVVkiORgVgvGyAPzrWaRBJ~s8KFxSUBFHeTd5fncxOQvUCgTrjFCapujpXyxQGES4rn5eGgLdPTAE0yyjm1J6orvwR6qigcEfRkm8wyvvtfc3zKWO4L7yjF~D8KJn~VbrQ__&Key-Pair-Id=K2TK3EG287XSFC)

**During**: This refers to the phase when the request is moving into a specific status. These configurations have two parts, mandatory fields and rules. While the request is about to move into the status, you can mandate certain fields. For example, you can mandate the technician field for the request to move into the Assigned status, or the Resolution field for the request to move into the Resolved status. That is, as long as the request stays in the status, the mandatory fields cannot be left empty.You can configure rules to check for criteria and execute custom actions or negate action. With custom actions, you can update request fields or execute [custom scripts](https://help.servicedeskplus.com/executing_script_in_business_rule)/[custom functions](https://help.servicedeskplus.com/request-custom-function).

Note that these custom scripts can be used to execute any action except status update, because the script is already triggered due to a status change. You can add a maximum of 10 rules. Use cascade execution options to execute all the rules (on criteria match) in sequence, or to break rule execution after the current rule.

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/During_Transition\(2\).png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL0R1cmluZ19UcmFuc2l0aW9uKDIpLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc1NjI1ODk4Mn19fV19&Signature=Ow~MlDvQiv5TJY9iw-z3TGdU5cOnJB6qvg6PIJjD8GvQzZi2ejc8hSBg6tR-1EfBPAPqIB28p3jV~v8zZDkhY-a17XfAP91RENxcPuDt8wo5ycb1dEBU0gSsxvVBHahnRkuPtooByyiTXQ7qbTfCqqaN6ByUAgmz8CKmuwlUpbXvjC-RZKRLRcUl6OTvDbSGd3ToLM5HWMNVQ3peib76wFDdquziydXeJMrRWqqQ6zr3mMvvF~VSJxiDpYPT~7jjUf9oivXtks~LLXKEB9w409NXgSXPk505wZu63ry5DmKNAjdKnP5ic8Q5ixVLqWbMGBFQgfofOXUSTseicxSD4Q__&Key-Pair-Id=K2TK3EG287XSFC)

**After**: This refers to the phase when the request has moved to a status. Here you configure rules to check for criteria and accordingly define actions using [custom scripts](https://help.servicedeskplus.com/configurations/helpdesk/use_cases_custom_triggers.html) and [custom functions](https://help.servicedeskplus.com/request-custom-function). You can also configure notifications for the stakeholders. New notification templates can also be configured and sent to all organizational roles and other stakeholders, such as $on_behalf_of_user or $ticketowner. For example, when a request from a VIP user or a high-priority request is assigned to a technician, a unique request assignment notification can be configured to be sent. 

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/After_Transition.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL0FmdGVyX1RyYW5zaXRpb24ucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzU2MjU4OTgyfX19XX0_&Signature=UAf-k3oL-SjNTM6LYbeU9Lf81776ZgWZzsZQcvCT4dydH3xW8~8eCXV3f3puPRb9-nrRM6fCYfGs08-0YVAz8bErsZvy4QtPSBrcchDSGo551hDC5U2fhQwB2fvw7EYFyE9bDf2cOHeTmno2frJ6-JpKLqTq4EUryQ2dNg4hzm1a9g6Mlulfonmp7zcFP4ueakeCd8pK9Zcg4Sn-Njz9P~RjX-IpqGWb1hrpigPmqIyO~dYDHcOGVbMUPejCsuQRwlpYbLIOL0LqqWnpZgQlM65keGd4XXE-f6~ZOhJuEqFrOfVUdUhaHjS2jWx3qa12oHYxzQcKwmZEIOlJ17M6-w__&Key-Pair-Id=K2TK3EG287XSFC)

## **Configuring Request Life Cycle**

Go to **Admin>>Helpdesk Customizer>>Request Life Cycle.**

Click **New**, provide a name and description for the life cycle, associate the relevant templates, and **Save** as shown below:

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/New%20Life%20Cycle\(1\).png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL05ldyUyMExpZmUlMjBDeWNsZSgxKS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NTYyNTg5ODJ9fX1dfQ__&Signature=ZPh-liMNISFfjcPo36-lem1W8nF1v8Gk01NdLamPRJb9u17vdo84itbZoVrgrVyeC6kf8rs4QOAalGJIrfMRVQ~bZvacKIv4FJnVBSrZRIgasfKv1U6BDOXzBWETBmuJ815XxphVCtd-bNmeHCTO5sDoTVYzdIAv2PFaSkA1huYszyo-0jdFTyWrg20GgqaUkxRu78aFoLSvrEfbZ7utSAtvOeBTpLB1s0hA0JQoC2foI2MnqfXN6lpQYU7tbBJv~1l4K8yky9p0X74EWG6PyM9G6xIX~MRKQD6HB~eeR8-xJtCjLwAHXYEAmIswuFfS8gM8EuL3wdQ9pejymu45yA__&Key-Pair-Id=K2TK3EG287XSFC)

The life cycle will appear prepopulated with various nodes (status) and transitions. You can either work with these or undo all of them and create new status/es and transitions on the life cycle canvas. Use the zoom slider on the left to increase or decrease the size of the canvas. You can also move the life cycle around the canvas by using the hand tool cursor. 

To add a status to the life cycle, drag it from the right panel. To connect two status/es by a transition, hover over a status, click the plus sign and drag it up to the next status. Click the button that appears on the connector to provide the transition name, description, and help content that will be displayed on the [**Request Details** page](https://help.servicedeskplus.com/request_details_page). 

The request life cycle begins at the **Start** block and completes at the **End** block. When the request is created, only status/es connected to the Start are displayed to the user. Similarly, the request flow is considered to be closed only when the request reaches a status connected to the **End** block. Ensure that the default statuses configured in the associated templates are connected to the Start node in the life cycle. For example, if the status in the associated template is Open, make sure that the status you connect to the Start node in the life cycle is also Open. 

Let us configure a sample life cycle for one of the most commonly raised requests in any organization; the request for a laptop. This life cycle can be associated to service request templates already configured for desktops, mobile phones, and other hardware requests. 

The request resolution process for this request will contain the following statuses: **Open**, **Approval**, **Assigned**, **In Progress**, **Asset Provisioning/PO Raised** (if the asset is not available already), and **Closed/Rejected/Cancelled**. Note that the status movement of the request may not necessarily be linear. For example, an open request can be cancelled or even rejected. Similarly a closed request can also be reopened. The processes that happen between status/es are configured under a transition. 

All transitions, except the Open status transition, will contain three phases to be configured: Before, During, and After. Note that it is not mandatory to configure all the transitions or their phases. You can choose to configure just one transition or just one phase of a transition to suit your requirements. However, for the request to move from one status to another, you must configure the transitions. Transition Actions can be configured per your requirements, and it is not mandatory for each transition to have transition actions configured. In the absence of transition configurations, the request will remain in the same status. 

The following screenshot displays the life cycle for a laptop request:

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/RLC.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL1JMQy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NTYyNTg5ODJ9fX1dfQ__&Signature=J9H5qfNDk0GU6SXtqCjzbDxzzXgm7z85CjyGchMhIDqYwhjDgwmFsq7v0LrR7uNE-o7Vcgs0JGUu3ljx5DC7gMBmMLl1m67-CufMSl7xay5mRgrt0o~UswjxT-EJi2XHD~Zwdkuqr4R3T1HzgCD5CEuRzvVW1fOZhFq5xk8hPkmuIgMlWQss1xZwYnd0v-nrQXIBAtTpIcmLcbVzIjgkiYchG3wuRunVexxwS4--w-~~ISajkwglgK2AxWOkvYYJxvPLDmTCCzZZhQgBYD1gmyRzKBtBX-GHXVuvDuCvXpfF7vt69Hag5AbYEAP1yhotDleY21BBMRT9I-0HBd6xAA__&Key-Pair-Id=K2TK3EG287XSFC)

For the sample life cycle, let's look at the configurations set up for the **Assign Technician** transition. Firstly, you can make the transition visible only to the ticket owner. In that case, under **Before>Roles**, choose **$TicketOwner**. For the request to move into this status, you can choose the Approval Criteria as Approved. 

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/Before_Sample.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL0JlZm9yZV9TYW1wbGUucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzU2MjU4OTgyfX19XX0_&Signature=rlnk1h44W3yhGc53TfbgHhLlPS0c6NYirW~CCkbZEzvP0fnEvzMJE4gPgYfvbSwDEjQANSyrLKCgEH~YBE9bXOHF~0RIDVMmG2VImt32tUyOwTvoym8AElHb2CbvnBFU-~Lj9HopX2Argxf63d9bmAfoIpoLL0ZPvIzpCC0onoZoDpaBcyhHfh3zM~NfTzc6feU3R3r-GZpN0oAWP9-puBu8XcmZ-KsUcZLbi49iotLzqf9V4KNMzx1b5vWtH7C7de9bXpbXItqdbkp4nTBDciT7Ln9dw1qefK7eipYPXwILO2zAQM3Q2nChbr-sE0DP6SYwAIQ78yu~I8s~hOdxeg__&Key-Pair-Id=K2TK3EG287XSFC)

Then, when the request moves into **Assigned** status, you can mandate the Group and Technician. These might appear as a pop-up to the technician working on the request. In parallel, you can also check if the request was raised by a VIP user and send out an alert the technician and group details collected in this phase. To define the rule, configure criteria as if VIP user is true, then execute a script to send out an alert to the concerned technician or technician group.

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/During_Sample\(1\).png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL0R1cmluZ19TYW1wbGUoMSkucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzU2MjU4OTgyfX19XX0_&Signature=Wwh9GD9wJXnzYdxM9ObBDYVhmuNPwqtKSULvKlr-muS4HgXQMDrkHVgOfXZd4SyOUroPIzaAx5K8W7M98XBefs7LG1ywSIjwz1glIuwRxkxcq6~70oWUcMBNIcbSFbIsdiAXj~DI73Vd-BVfSvRTsDHB2YvUqZHbfy-A-FObO3P1PKJroAPQ-FdpHbSr7oK1HDd0llBHUggOSrSIFQ2QX55sofDRtKLipD2HtTDbq~4bObowHMY6z-Zs1waHgykZBlcyoYwjD75huy9fJXxdKgJxnSIybHbaopb9xoLWaTFtAWVxJ5W8q2L4QHHq6cq1mZeVfBb9BlGGPe6~VckUYQ__&Key-Pair-Id=K2TK3EG287XSFC)

Finally, when the request has moved into the Assigned status, you can configure actions based on certain criteria, and importantly send out custom email notifications for each transition action to the ticket owner, the admin, or the support group. Here, you can create new notification templates as well. For example, you can send out custom notifications to technicians about the category of the requests assigned to them, including any additional details from the ticket. 

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/After_Sample.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL0FmdGVyX1NhbXBsZS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NTYyNTg5ODJ9fX1dfQ__&Signature=fxAy3-ZZbRK5EIzdQe-i~0ab3LURUV9cfeBJUy~Hiv9as6brwnSg2CNnoRNtb9ijQx14zzQviuAMWi9diOy-~bsNgnroIYFlzeU76Y8iKtWjbC33YoVPGk2Uu9WsPJerlcVj0opjQ8VVdGr2x-3y01VNsJIly8eHHPb8UHEgsbzuLVu~QoCp4gPI8uUaDSizuyoAtXu6~ejWqGEMt1ERWP8ilB40-yz-9JKEMMy~ITifBvtVYJyL2IAkva8lZfRWBaL1ESCUJDcPTrcU2bTRz1~QRqQ~Fj1jI4sezAr~pAjISWdxb49BBK2-XbFJkbA6XU9IxwseAGyfgu0XZgdH~g__&Key-Pair-Id=K2TK3EG287XSFC)

Mandatory fields and dependancy requests completion rules configured under **Request Closing Rules** will not be applied for requests  that have a life cycle associated. These must be configured under the respective transitions inside life cycle.

### **Notification Configurations**

Under the **After** phase of any transition, you can configure notifications to be sent to the following predefined roles:

- **$CC_Users**
- **$Dependent_Requests_Owners**
- **$Editor**
- **$Ticket_Owner**
- **$Task_Owners**
- **$Shared_Technicians**
- **$Shared_Requesters**
- **$Requester**
- **$On_Behalf_of_User**
- **$Linked_To_Request_Owner**
- **$Linked_Requests_Owners**
- **$Group_Members**

### **Skipped Transition Configurations** 

Mandatory fields under the During transitions are skipped in the following scenarios for templates associated with a life cycle:

1. Request addition by email
2. Conversion of incidents to service requests and vice versa
3. Preventive maintenance tasks
4. Requests import from XLS 
5. Splitting conversations into new requests

For some user operations such as converting incidents to service requests or vice versa and system operations such as automated closures, SLA escalations, and preventive maintainance tasks, the Before transition configurations are skipped. 

**Save and Publish Life Cycle**

After you configure all the transition settings across all statuses, you can save the life cycle as a draft to work on it at a later point time, or publish it right away. Note that life cycle configurations will be saved only when the **Save Draft** button is clicked.

To edit an already published life cycle, click the Save Draft button and continue modifying the life cycle per your requirements. 

Only published life cycles can be applied to the Request Resolution process. 

### **Life Cycle Status Modifications**

Request life cycle configurations for status modifications take precedence over all other configurations and rules, including business rules. 

In the following scenarios, operations configured to be performed on the requests will be stopped:

1. No transitions are configured for the current status to move to the target status.
2. Before conditions (role and rule) are not met.
3. When a negate condition is configured.
4. When the configured Field and Form rules affect the template status.
5. If the system changed status is in conflict with the life cycle.
6. External actions such as custom triggers, custom menu, or API calls from other integrated applications do not comply with the life cycle.

### **Linear and Graphical Views**

You can toggle between the Graphical and Linear view of the request life cycle. The linear view provides at a glance expandable views of all the transitions and their configurations, categorized by status. 

The following screenshot captures the Open status transition configuration for the Request for Laptop life cycle (discussed above).

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/Linear%20View.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL0xpbmVhciUyMFZpZXcucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzU2MjU4OTgyfX19XX0_&Signature=n4cdaa9oHgksuMrBk8yBbIT35~CwUqLP-da4yW4NAJOn16FmqI~C9w2HbObwScJ7dV4VmyHG7WFL2L2LEmq-zQPd2kFML~tCrVUsIi3VeCxvpa4-13N2rCWMxyiua8nQDwrETb~2kfWdUTo~~CdZCT90L74-VWp8-76JFjHeXyp8sjhix6lr15Eq9UEIJ~F~51LQVsEhkBtLW6rikMqsjqRTVz6RiuXZEwsTZboNyLb8c1tU18h1xa7Yt3PLxTLXXWrG~ESBYSnFb~V66cVPJgc49teGzVnn4GprtTTOzl5TIIg9BvKXS12zjIEl7hilU5WjzVxtiob70-CtHu37Xg__&Key-Pair-Id=K2TK3EG287XSFC)

### **Editing a Life Cycle**

While configuring the life cycle, if you want to modify its name or associate new templates or modify the associations, click the edit button ![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/EditButton.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL0VkaXRCdXR0b24ucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzU2MjU4OTgyfX19XX0_&Signature=EDJl8XI2LQ36naUhP~xxImmi3zteh5jeHBBJKBUCrZDDjHoHFZZULy07~ZW3tXLWFgPQMd684SH2Sxgp8DdulykocK211IAyTBNIMtedJj8lPJ1CkDHvzAcT2Wnp3V-ungAB4bI-8UpuazlsYsShf3myIYrdw13Kxl0Nqf2BMDmXmfXxbcQihvxtevSpLgYrf4A61s3PnCX~vGdPWIBGg4MtW4mjIqQoG-ospZ3mqaBPKTtuoBuZSKiTu-pAqINL1oCvDG2Ijk36jK5wlskeb73JIm3vXuAvkmYlYUMgLhPwUx2ZAHdooNLXPrZNRYY4yoWjeyOaLLX8yEh0ERl1fQ__&Key-Pair-Id=K2TK3EG287XSFC)in the upper half of the right panel.

## **Request Life Cycle List View**

On the list view page, you can choose to list either the Active Life Cycle or Inactive Life Cycle.

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/RLC_ListView.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL1JMQ19MaXN0Vmlldy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NTYyNTg5ODJ9fX1dfQ__&Signature=mOmGuF37-Cdup1xARGVCveYGwpiij0MxOxkvqnu~CZLYPynehDinih1ADs0lzfSGpNX7UySXDi6t74hFB2M0W69L3zN6oLbWWhlv5oKOokKaCc3AgRb-x889qafN1OXNcMEwTiE2hPK-M2VxGbf59OrlbLuNLmQOQa~pWXhJwekn1~~pBFo4h2H-Wq6oR3LSD~4Um4T1X0ocCgVfJiKZjKhFjaUFBufwlHv39GM6cChs169-EZqx8XUPoJ-bMtG0Hv-0d8pI7lM7CGT83D5HPAZB1MymxlCORirkCavrLTyyLD1uspERR3j39Hqp-7UIBeTkCfxL~SoYz~W-3iXlaQ__&Key-Pair-Id=K2TK3EG287XSFC)

To delete a life cycle, click the hamburger button next to the life cycle. Using this button, you can also make a published life cycle inactive. Making published life cycle inactive will dissociate all the requests linked to this life cycle.

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/RLC_Inactive.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL1JMQ19JbmFjdGl2ZS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NTYyNTg5ODJ9fX1dfQ__&Signature=lbvNp1-eXQVyf-yj3naPHEKk9jIr7ENyUOaf5aL48409AZYf~~46-ns0~vNV-zw9CWeaGsxjKqyl3tMos3qKZCVLZ8rUfTmirNlI2GPga2TlwS5j0WSMeY8b04geqatC7h~0ZEehonxOJ7yzo9ZJNqqyoi26FTOoHlSiyGHh4DVa74WqfzLUgKo50N9RCdRTfN3AgjdyzsDycYbFbf48w1twSn8iF3Rtf-Fx58sqShP4dB-uDrEXvaSiIvnLwelVrapPWHp995G4K0oyhIp4yIFl4BeEoUztf63NSIvFKVU97VPJ3OCT9JvDfZ-cEkI4ZgO6Tz39fnqQtSLMwxcM1A__&Key-Pair-Id=K2TK3EG287XSFC)

To find any life cycle using its name or the associated template, use the search field. Type out the first few letters of the life cycle in the field; the matching results will be listed below. 

![](https://dzf8vqv24eqhg.cloudfront.net/userfiles/866/14262/ckfinder/images/RLC_Search.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kemY4dnF2MjRlcWhnLmNsb3VkZnJvbnQubmV0L3VzZXJmaWxlcy84NjYvMTQyNjIvY2tmaW5kZXIvaW1hZ2VzL1JMQ19TZWFyY2gucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzU2MjU4OTgyfX19XX0_&Signature=YRYzlZK0NdsCQNCsevb5IYCi8lLwqr-s7ZRBlxt8vy1j2W6b86sZt~r~TS91Z0iwSupAO6nHGjFesJl1Bz4vvUEsiZ7L1WlLWMQwbX5gCWPkLYUB0-6R7yCk2NNpNLxRjDIHP2Ns8xwIZa412kREUJBaeMAOuiqJpu7JKx4e4P~aAEbgJtEtQluQOI6CEFGlsaFOxaeKx1uRfKkPeJNXqH3Tne1VcNyKY5op9x16WMCeNeqUN1CV8aqnltXWEENO1Q7tDXYJXhjlcQhSyZHxoekE6PXLhQWbBQ7UmAuS9A7u1g~M87U8UVrmd3VD9AhuF-d0PSizI8JnANXVp8BUMg__&Key-Pair-Id=K2TK3EG287XSFC)

## **Request Life Cycle: Summary**

The Request Life Cycle feature in ServiceDesk Plus is a drag-and-drop life cycle builder that can be effectively used to provide guidance to the technicians. 

A transition refers to the path between two statuses, and each transition is further divided into Before, During, and After phases with individual configurations.

Restrict the visibility of the transition to specific Role or Group by configuring Roles in the Before transition.

Define when the transition can be invoked by configuring Rules in the Before transition. 

Collect relevant and just in time data by configuring mandatory and optional fields in the During phase. 

Check the transition's validity and negate it, if necessary, by configuring Rules and Script execution in the During phase. 

Enable actions over third-party applications by configuring script execution in the After phase. 

Notify relevant stakeholders by configuring email notifications in the After phase.
https://help.servicedeskplus.com/what-is-request-life-cycle
