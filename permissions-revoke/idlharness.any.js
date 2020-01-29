// META: script=/resources/WebIDLParser.js
// META: script=/resources/idlharness.js

'use strict';

idl_test(
  ['permissions-revoke'],
  ['permissions', 'html', 'dom'],
  async idl_array => {
    // Attempt to make a permissions object available via navigator.
    try {
      await navigator.permissions.query({ name: "geolocation" });
    } catch (e) {
      // The idlharness.js tests will fail, so no need to re-throw.
    }

    if (self.GLOBAL.isWorker()) {
      idl_array.add_objects({ WorkerNavigator: ['navigator'] });
    } else {
      idl_array.add_objects({ Navigator: ['navigator'] });
    }

    idl_array.add_objects({
      Permissions: ['navigator.permissions'],
    });
  }
);
