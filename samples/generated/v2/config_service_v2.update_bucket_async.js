// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

'use strict';

function main(name, bucket, updateMask) {
  // [START logging_v2_generated_ConfigServiceV2_UpdateBucketAsync_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The full resource name of the bucket to update.
   *      "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *      "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *      "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *      "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *  For example:
   *    `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  // const name = 'abc123'
  /**
   *  Required. The updated bucket.
   */
  // const bucket = {}
  /**
   *  Required. Field mask that specifies the fields in `bucket` that need an
   *  update. A bucket field will be overwritten if, and only if, it is in the
   *  update mask. `name` and output only fields cannot be updated.
   *  For a detailed `FieldMask` definition, see:
   *  https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   *  For example: `updateMask=retention_days`
   */
  // const updateMask = {}

  // Imports the Logging library
  const {ConfigServiceV2Client} = require('@google-cloud/logging').v2;

  // Instantiates a client
  const loggingClient = new ConfigServiceV2Client();

  async function callUpdateBucketAsync() {
    // Construct request
    const request = {
      name,
      bucket,
      updateMask,
    };

    // Run request
    const [operation] = await loggingClient.updateBucketAsync(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateBucketAsync();
  // [END logging_v2_generated_ConfigServiceV2_UpdateBucketAsync_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
