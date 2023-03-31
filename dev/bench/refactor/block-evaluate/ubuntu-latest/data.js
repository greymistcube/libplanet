window.BENCHMARK_DATA = {
  "lastUpdate": 1680268577810,
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
      }
    ]
  }
}