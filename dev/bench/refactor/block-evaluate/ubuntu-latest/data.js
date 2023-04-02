window.BENCHMARK_DATA = {
  "lastUpdate": 1680478373246,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "70bbfb2f984e84ee4571d9e3a68ad6a3cb0c3fc0",
          "message": "Removed unnecessary code",
          "timestamp": "2023-03-31T21:50:08+09:00",
          "tree_id": "7fe50a118abcde3a3dc3a20aa6b369c7ce345b0a",
          "url": "https://github.com/greymistcube/libplanet/commit/70bbfb2f984e84ee4571d9e3a68ad6a3cb0c3fc0"
        },
        "date": 1680268258798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4385902.308510638,
            "unit": "ns",
            "range": "± 402898.9599364748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4647104.189473684,
            "unit": "ns",
            "range": "± 469407.9341452331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5890039.357142857,
            "unit": "ns",
            "range": "± 518827.6252882775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5858066.631578947,
            "unit": "ns",
            "range": "± 436323.98285063304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11278228.736842105,
            "unit": "ns",
            "range": "± 1021392.3109049579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10164517.340206185,
            "unit": "ns",
            "range": "± 1125029.953831405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27731994.75,
            "unit": "ns",
            "range": "± 1562096.5178706949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69379744.91780822,
            "unit": "ns",
            "range": "± 3442552.703712435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147601103.1607143,
            "unit": "ns",
            "range": "± 6302102.132531522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298324351.6585366,
            "unit": "ns",
            "range": "± 10643332.315483185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1853703.7448979593,
            "unit": "ns",
            "range": "± 168315.7923990308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3738044.315217391,
            "unit": "ns",
            "range": "± 357919.7871370319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2953967.946236559,
            "unit": "ns",
            "range": "± 308135.5041850541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8009845.336842106,
            "unit": "ns",
            "range": "± 776900.94280824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73396.25510204081,
            "unit": "ns",
            "range": "± 18008.975616305474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7648772.1129557295,
            "unit": "ns",
            "range": "± 198178.67575052357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2381465.348132622,
            "unit": "ns",
            "range": "± 84774.60607162621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1792294.5246582031,
            "unit": "ns",
            "range": "± 45686.070434828915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3354204.2176339286,
            "unit": "ns",
            "range": "± 79413.61143726685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1106822.8190429688,
            "unit": "ns",
            "range": "± 25359.136656014638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1043245.6231689453,
            "unit": "ns",
            "range": "± 19241.20597868258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 461752.1595744681,
            "unit": "ns",
            "range": "± 64766.175941555644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 397195.6666666667,
            "unit": "ns",
            "range": "± 51417.98111467205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 361480.52127659577,
            "unit": "ns",
            "range": "± 46947.12108885699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7523641.364705882,
            "unit": "ns",
            "range": "± 404776.332272847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5534495.169230769,
            "unit": "ns",
            "range": "± 258719.8350682989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32096.040404040403,
            "unit": "ns",
            "range": "± 10874.20588507519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131892.70103092783,
            "unit": "ns",
            "range": "± 31641.557307388794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110990.12,
            "unit": "ns",
            "range": "± 28597.197230144735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 260406.42857142858,
            "unit": "ns",
            "range": "± 45637.329791676966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7271.428571428572,
            "unit": "ns",
            "range": "± 1405.6991786838255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30304.35106382979,
            "unit": "ns",
            "range": "± 9436.884982119447"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "9001bd0946b8b6dc35a0785c3f1aae063602f01b",
          "message": "Removed unnecessary code",
          "timestamp": "2023-03-31T22:04:01+09:00",
          "tree_id": "02d553f2e0cb0f162a8019a02314901ac94430c7",
          "url": "https://github.com/greymistcube/libplanet/commit/9001bd0946b8b6dc35a0785c3f1aae063602f01b"
        },
        "date": 1680268566066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3138151.069767442,
            "unit": "ns",
            "range": "± 104565.44926831947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3286496.5714285714,
            "unit": "ns",
            "range": "± 45522.78997248654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4147780.3703703703,
            "unit": "ns",
            "range": "± 114489.32484268774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4332078.642857143,
            "unit": "ns",
            "range": "± 57661.83493385864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7418577.294117647,
            "unit": "ns",
            "range": "± 124917.23613095027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7482817.5,
            "unit": "ns",
            "range": "± 15040.092106663546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18895828.866666667,
            "unit": "ns",
            "range": "± 82469.53633906858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47713964.13333333,
            "unit": "ns",
            "range": "± 280579.8621810774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96655180.07692307,
            "unit": "ns",
            "range": "± 512288.3440787134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191718410,
            "unit": "ns",
            "range": "± 1363740.8055082562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1330915.34,
            "unit": "ns",
            "range": "± 101086.81461323678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2569927,
            "unit": "ns",
            "range": "± 69646.58980717743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2112043.9178082193,
            "unit": "ns",
            "range": "± 104286.4255527846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5334208.695652174,
            "unit": "ns",
            "range": "± 131065.48103608876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44580.43421052631,
            "unit": "ns",
            "range": "± 2276.1620290042406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5804030.523958334,
            "unit": "ns",
            "range": "± 30320.29057964703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834789.7356770833,
            "unit": "ns",
            "range": "± 2880.742367995539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364677.7209635417,
            "unit": "ns",
            "range": "± 3456.7144516466205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554706.647879464,
            "unit": "ns",
            "range": "± 6538.136299749277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815888.2723795573,
            "unit": "ns",
            "range": "± 1468.0440934629667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726304.0417317708,
            "unit": "ns",
            "range": "± 792.0232984973368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323034.36363636365,
            "unit": "ns",
            "range": "± 10114.8425402295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262906.8823529412,
            "unit": "ns",
            "range": "± 5360.791754516689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235670,
            "unit": "ns",
            "range": "± 2970.50655051738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5510164.733333333,
            "unit": "ns",
            "range": "± 54840.972978326376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3837955.6428571427,
            "unit": "ns",
            "range": "± 50433.251962153125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15679.1875,
            "unit": "ns",
            "range": "± 1359.3226588229425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79606.42105263157,
            "unit": "ns",
            "range": "± 3471.374176992698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70692.30769230769,
            "unit": "ns",
            "range": "± 1098.0752391203578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 164011.1052631579,
            "unit": "ns",
            "range": "± 12310.294402924494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4555.670103092783,
            "unit": "ns",
            "range": "± 545.0476034571332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14593.736842105263,
            "unit": "ns",
            "range": "± 949.5770526646947"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "209f23ed94d414763aae988f5fc01c17843dc22e",
          "message": "Removed unnecessary code",
          "timestamp": "2023-04-03T08:10:57+09:00",
          "tree_id": "3630ec58dcbad78583537686b426cf184982a649",
          "url": "https://github.com/greymistcube/libplanet/commit/209f23ed94d414763aae988f5fc01c17843dc22e"
        },
        "date": 1680477857669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3365378.878787879,
            "unit": "ns",
            "range": "± 104070.09238181662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3578172.111111111,
            "unit": "ns",
            "range": "± 98650.56994740941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252134.222222222,
            "unit": "ns",
            "range": "± 118131.11262632438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4539490.057692308,
            "unit": "ns",
            "range": "± 172620.62453484672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7636163.6875,
            "unit": "ns",
            "range": "± 143671.23769853578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7805715,
            "unit": "ns",
            "range": "± 80608.35379499114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21432565.42857143,
            "unit": "ns",
            "range": "± 205948.41125714144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53234936,
            "unit": "ns",
            "range": "± 1167431.6845108706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105029074.06666666,
            "unit": "ns",
            "range": "± 1628189.334099976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209627941.86666667,
            "unit": "ns",
            "range": "± 2209054.315214443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431703.021978022,
            "unit": "ns",
            "range": "± 79799.37227920446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2681440.290322581,
            "unit": "ns",
            "range": "± 79638.31607971695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2320363.154761905,
            "unit": "ns",
            "range": "± 124590.69606684739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5735651.275862069,
            "unit": "ns",
            "range": "± 167684.99273763644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48734.27631578947,
            "unit": "ns",
            "range": "± 2475.239719562177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5923636.978236607,
            "unit": "ns",
            "range": "± 26054.362071888132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829800.9927455357,
            "unit": "ns",
            "range": "± 4680.314852244846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335187.3680989584,
            "unit": "ns",
            "range": "± 4685.493678388597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628667.1783854165,
            "unit": "ns",
            "range": "± 5360.030343233098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830417.5868489583,
            "unit": "ns",
            "range": "± 1614.4670415882306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771608.812639509,
            "unit": "ns",
            "range": "± 542.4798368839922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349027.4736842105,
            "unit": "ns",
            "range": "± 7670.438639988235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282504.44444444444,
            "unit": "ns",
            "range": "± 9405.038729910211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230989.25,
            "unit": "ns",
            "range": "± 2649.5700208627336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5739502.2,
            "unit": "ns",
            "range": "± 53276.71521432765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3978370.875,
            "unit": "ns",
            "range": "± 76124.82992022598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19959.989361702126,
            "unit": "ns",
            "range": "± 1300.2136259107156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88831.05555555556,
            "unit": "ns",
            "range": "± 4410.253158997516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78567.03389830509,
            "unit": "ns",
            "range": "± 3447.719085915037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 195842.35714285713,
            "unit": "ns",
            "range": "± 18517.857800807516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6324.683673469388,
            "unit": "ns",
            "range": "± 826.3228020167169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19049.915789473685,
            "unit": "ns",
            "range": "± 1396.307216874917"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "88cb0eb43cb4b2488f0603c07cc2e8b60e2f1af9",
          "message": "Changelog",
          "timestamp": "2023-04-03T08:20:42+09:00",
          "tree_id": "6fc435a88e151154085159a711785858081f7f48",
          "url": "https://github.com/greymistcube/libplanet/commit/88cb0eb43cb4b2488f0603c07cc2e8b60e2f1af9"
        },
        "date": 1680478365991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3199982.9285714286,
            "unit": "ns",
            "range": "± 35177.57622836169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3316263.4210526315,
            "unit": "ns",
            "range": "± 45443.343714167604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4134909.214285714,
            "unit": "ns",
            "range": "± 59678.11420919677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4270825.692307692,
            "unit": "ns",
            "range": "± 61297.60798811078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7353654.294117647,
            "unit": "ns",
            "range": "± 115857.40115858197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7511618,
            "unit": "ns",
            "range": "± 9047.868839978537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18799595.153846152,
            "unit": "ns",
            "range": "± 61475.91986548629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49250732.53333333,
            "unit": "ns",
            "range": "± 729130.5156215534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96663218.46666667,
            "unit": "ns",
            "range": "± 1024943.1969434674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193898229.66666666,
            "unit": "ns",
            "range": "± 1120200.3976892238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343895.95,
            "unit": "ns",
            "range": "± 97046.86068219929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572250.48,
            "unit": "ns",
            "range": "± 64848.57058506892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2125656.105882353,
            "unit": "ns",
            "range": "± 109654.70490003994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5401481.416666667,
            "unit": "ns",
            "range": "± 108209.24259805595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45150.59154929577,
            "unit": "ns",
            "range": "± 2223.805243126326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5870685.94921875,
            "unit": "ns",
            "range": "± 20623.459188479654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1989253.5736177885,
            "unit": "ns",
            "range": "± 3421.895688616485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354367.8139322917,
            "unit": "ns",
            "range": "± 921.0367396560346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560602.6925223214,
            "unit": "ns",
            "range": "± 2035.0695733461896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794093.4326985677,
            "unit": "ns",
            "range": "± 608.9247316958417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721436.9949079241,
            "unit": "ns",
            "range": "± 203.89686609278857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320017.9375,
            "unit": "ns",
            "range": "± 3051.136017261986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269795.48148148146,
            "unit": "ns",
            "range": "± 11288.77497363248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234472.6,
            "unit": "ns",
            "range": "± 3446.1463943698873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5579718.066666666,
            "unit": "ns",
            "range": "± 38262.61080903667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929518.1428571427,
            "unit": "ns",
            "range": "± 19047.994277036676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16777.924731182797,
            "unit": "ns",
            "range": "± 1218.569557313884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85592.77586206897,
            "unit": "ns",
            "range": "± 3708.1489023789427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78116.42857142857,
            "unit": "ns",
            "range": "± 1796.4150013687977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 183756.52040816325,
            "unit": "ns",
            "range": "± 15222.642147915609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5352.010204081633,
            "unit": "ns",
            "range": "± 846.0935520755819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16652.041666666668,
            "unit": "ns",
            "range": "± 2103.5924255859204"
          }
        ]
      }
    ]
  }
}