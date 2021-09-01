## JavaScript Security Engineering Demo

1. Create project in Firebase
2. Create Cloud Firestore database instance
3. Add collection `courses`, in this collection add document `test`, with fields `lessonCount` equal to `5` (number), `status` equal to `draft` (string) and `url` equal to `https://google.com` (string)
4. Add collection `users`, in this collectio nadd document `admin`, with field `isAdmin` equal to `true`, and a new document `test` in collection `users` without any field
5. Move to `rules`, apply the `firestore.rules`, run `Rules Playground`
6. Click `Run` to for `Simulation type` of `get` and `location` of `courses/test`. Unintuitive error of being not authenticated will pop up
7. Click `Run` to for `Simulation type` of `get` and `location` of `courses/test` with `Authenticated` set to `ON`. Unintuitive error of is known user will pop up
8. Click `Run` to for `Simulation type` of `get` and `location` of `courses/test` with `Authenticated` set to `ON` and `Firebase UID` set to `test`. Simulated read allowed will pop up
9. Change `Simulation type` to `update`. Unintuitive error of admin being able to do so will pop up
10. Change `Firebase UID` to `admin`. Unintuitive error of is valid course will pop up
11. Click `Build document`, set `seqNo` with `type` of `number` to `value` of `5` and set `url` with `type` of `string` to `value` of `https://google.com`. Click `Run`. Simulated read allowed will pop up

It's supposed to showcase relatively unintuitive environment of Severless Security
