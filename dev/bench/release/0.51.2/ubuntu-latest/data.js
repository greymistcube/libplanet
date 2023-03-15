window.BENCHMARK_DATA = {
  "lastUpdate": 1678871476232,
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
          "id": "d9ac9e43466be30ffab0ca9f7fa20412332985f0",
          "message": "Release 0.51.2",
          "timestamp": "2023-03-15T16:31:49+09:00",
          "tree_id": "c71203d3f8c74634e228142d5310896d1e4e9475",
          "url": "https://github.com/greymistcube/libplanet/commit/d9ac9e43466be30ffab0ca9f7fa20412332985f0"
        },
        "date": 1678866356259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205510.9024390244,
            "unit": "ns",
            "range": "± 6938.58894806746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207977.46666666667,
            "unit": "ns",
            "range": "± 6200.764367417123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190523.88,
            "unit": "ns",
            "range": "± 5009.1388258528705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12605036.57142857,
            "unit": "ns",
            "range": "± 60520.67561613111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10198887.357142856,
            "unit": "ns",
            "range": "± 64541.07530463079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23129.782608695652,
            "unit": "ns",
            "range": "± 1431.0606058850885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60950.05319148936,
            "unit": "ns",
            "range": "± 5323.072751078016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46538.92957746479,
            "unit": "ns",
            "range": "± 2253.6366250633578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114444.55102040817,
            "unit": "ns",
            "range": "± 16038.382168406024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6796.01030927835,
            "unit": "ns",
            "range": "± 655.1722816501104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21796.252631578947,
            "unit": "ns",
            "range": "± 1522.2202077985417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3614865.6666666665,
            "unit": "ns",
            "range": "± 41881.23323615187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5700941.692307692,
            "unit": "ns",
            "range": "± 37646.49690074013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25874367.733333334,
            "unit": "ns",
            "range": "± 308056.92412916775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6886722.428571428,
            "unit": "ns",
            "range": "± 144800.95529884167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29553573.266666666,
            "unit": "ns",
            "range": "± 364187.15964684705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6012830.445870535,
            "unit": "ns",
            "range": "± 27573.782807606553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908153.073046875,
            "unit": "ns",
            "range": "± 1151.4842954254825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378099.534765625,
            "unit": "ns",
            "range": "± 2875.2642756478704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614477.7756696427,
            "unit": "ns",
            "range": "± 3574.410273945121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833442.6856971154,
            "unit": "ns",
            "range": "± 205.59659284104723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761676.7454427084,
            "unit": "ns",
            "range": "± 134.13476730325658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8283211.857142857,
            "unit": "ns",
            "range": "± 141432.45531286014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22303419.2,
            "unit": "ns",
            "range": "± 184237.71365090887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55982482.93333333,
            "unit": "ns",
            "range": "± 251448.85550614935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112215458.6923077,
            "unit": "ns",
            "range": "± 168732.24878654376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 225038749.6,
            "unit": "ns",
            "range": "± 834311.9959030228"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51499.875,
            "unit": "ns",
            "range": "± 3230.092524963888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484038.125,
            "unit": "ns",
            "range": "± 89483.74544960372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2759406.9444444445,
            "unit": "ns",
            "range": "± 57563.05151077404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2348661.6363636362,
            "unit": "ns",
            "range": "± 115745.28498398511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5419440.565217392,
            "unit": "ns",
            "range": "± 132120.21265699522"
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
          "id": "15b601af28513044eddc4ba6bece5e7ed539f952",
          "message": "Release 0.51.2",
          "timestamp": "2023-03-15T17:57:48+09:00",
          "tree_id": "8ea7ba6864a0af3ce8fc71e60b7c98bcdac8f132",
          "url": "https://github.com/greymistcube/libplanet/commit/15b601af28513044eddc4ba6bece5e7ed539f952"
        },
        "date": 1678871469499,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202962.60714285713,
            "unit": "ns",
            "range": "± 5100.205343282836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203133.25,
            "unit": "ns",
            "range": "± 6196.505654203879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170995.5,
            "unit": "ns",
            "range": "± 3285.9674171644897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12166677.533333333,
            "unit": "ns",
            "range": "± 183304.30917850655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9941410.375,
            "unit": "ns",
            "range": "± 195184.03087133777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21165.159574468085,
            "unit": "ns",
            "range": "± 1948.0164231892065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55234.758241758245,
            "unit": "ns",
            "range": "± 4101.565450032895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41500.42857142857,
            "unit": "ns",
            "range": "± 703.9669697546146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90758.10975609756,
            "unit": "ns",
            "range": "± 5141.722788591238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5921.9375,
            "unit": "ns",
            "range": "± 531.5558655098208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20898.191489361703,
            "unit": "ns",
            "range": "± 1358.2385911409026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3496723.090909091,
            "unit": "ns",
            "range": "± 83685.84586638468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5386827.516129033,
            "unit": "ns",
            "range": "± 160702.23150719283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24607039,
            "unit": "ns",
            "range": "± 484553.9077794905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6545075.814814814,
            "unit": "ns",
            "range": "± 180282.30407827633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28860572.133333333,
            "unit": "ns",
            "range": "± 531044.0645013592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6068507.709735577,
            "unit": "ns",
            "range": "± 14251.16466799596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857280.1713541667,
            "unit": "ns",
            "range": "± 2131.757913375292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349867.1201822916,
            "unit": "ns",
            "range": "± 3758.2108075044293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636995.055245536,
            "unit": "ns",
            "range": "± 4861.498541720225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872977.486467634,
            "unit": "ns",
            "range": "± 1429.377284717834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768134.330078125,
            "unit": "ns",
            "range": "± 1133.2770674011758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7863793.533333333,
            "unit": "ns",
            "range": "± 94393.36966868766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22338877.733333334,
            "unit": "ns",
            "range": "± 223486.66635249715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55879289.2,
            "unit": "ns",
            "range": "± 483478.7930608746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111934629.66666667,
            "unit": "ns",
            "range": "± 804484.6795592342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 219860316,
            "unit": "ns",
            "range": "± 2623710.0382758435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49557.51388888889,
            "unit": "ns",
            "range": "± 2456.9381150555732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1418940.8522727273,
            "unit": "ns",
            "range": "± 74724.88124032199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2680804.3,
            "unit": "ns",
            "range": "± 77955.20446059457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2288602.026666667,
            "unit": "ns",
            "range": "± 110430.45702894151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5744851.388888889,
            "unit": "ns",
            "range": "± 317445.8502124327"
          }
        ]
      }
    ]
  }
}