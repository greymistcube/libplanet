window.BENCHMARK_DATA = {
  "lastUpdate": 1695631154691,
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
          "id": "8e4b006558fdac842074ff6ab4d581ac3656284f",
          "message": "Libplanet 3.4.0",
          "timestamp": "2023-09-25T17:21:47+09:00",
          "tree_id": "260dfc4ebefa249cd7442ff61da7dfb4918da96d",
          "url": "https://github.com/greymistcube/libplanet/commit/8e4b006558fdac842074ff6ab4d581ac3656284f"
        },
        "date": 1695631130183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325236.4583333333,
            "unit": "ns",
            "range": "± 98264.07076936447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2515376.7441860465,
            "unit": "ns",
            "range": "± 135952.48103607085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1997772.1649484537,
            "unit": "ns",
            "range": "± 126902.6429182591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9027990.506329114,
            "unit": "ns",
            "range": "± 465296.2399400026"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49352.32558139535,
            "unit": "ns",
            "range": "± 2686.7310881084622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7283980,
            "unit": "ns",
            "range": "± 99864.46672508553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20489485.714285713,
            "unit": "ns",
            "range": "± 240906.6907048736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51659660,
            "unit": "ns",
            "range": "± 704342.4844694316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102020003.33333333,
            "unit": "ns",
            "range": "± 1030534.544972148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202333028.57142857,
            "unit": "ns",
            "range": "± 1507839.6631903904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4500058.173076923,
            "unit": "ns",
            "range": "± 15288.01383323777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1428921.1388221155,
            "unit": "ns",
            "range": "± 5102.036808760071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082004.84375,
            "unit": "ns",
            "range": "± 5070.964971909111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668992.7884615385,
            "unit": "ns",
            "range": "± 7509.068123992748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838883.2557091346,
            "unit": "ns",
            "range": "± 4040.4598190746838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774196.0658482143,
            "unit": "ns",
            "range": "± 2357.612473558086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3266312.765957447,
            "unit": "ns",
            "range": "± 126178.69422753499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429948.0392156863,
            "unit": "ns",
            "range": "± 139122.83995116845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4221542,
            "unit": "ns",
            "range": "± 166256.41474811718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4177990,
            "unit": "ns",
            "range": "± 166819.75486208132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10316635,
            "unit": "ns",
            "range": "± 352769.071373822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257747.22222222222,
            "unit": "ns",
            "range": "± 8507.189769705257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247243.02325581395,
            "unit": "ns",
            "range": "± 9100.141164494758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218610.3896103896,
            "unit": "ns",
            "range": "± 11161.913442072184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4059536.3636363638,
            "unit": "ns",
            "range": "± 95876.7738171021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3663900,
            "unit": "ns",
            "range": "± 51457.14015301737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20557.608695652172,
            "unit": "ns",
            "range": "± 2045.1622733463375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87642.85714285714,
            "unit": "ns",
            "range": "± 5200.750861540046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73106.8493150685,
            "unit": "ns",
            "range": "± 3443.8080008071206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87788.88888888889,
            "unit": "ns",
            "range": "± 17070.489447503383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5372.916666666667,
            "unit": "ns",
            "range": "± 757.2080527092401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21068.0412371134,
            "unit": "ns",
            "range": "± 2274.383908874766"
          }
        ]
      }
    ]
  }
}