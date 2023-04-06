window.BENCHMARK_DATA = {
  "lastUpdate": 1680757024017,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf92e685aa65475d9195d1a1dd417b9b6f71d853",
          "message": "Merge pull request #3062 from greymistcube/refactor/propose-block\n\n🧹 Remove tx execution update from `ProposeBlock()`",
          "timestamp": "2023-04-05T17:49:00+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/bf92e685aa65475d9195d1a1dd417b9b6f71d853"
        },
        "date": 1680757016957,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7484559.928571428,
            "unit": "ns",
            "range": "± 35446.34631809318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19360791.5,
            "unit": "ns",
            "range": "± 78501.58367118853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49547882.6,
            "unit": "ns",
            "range": "± 223306.41484509895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98442417.13333334,
            "unit": "ns",
            "range": "± 641829.5165230924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198237008.42857143,
            "unit": "ns",
            "range": "± 646785.9948773585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46270.596774193546,
            "unit": "ns",
            "range": "± 1957.2727802692361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1372390.505376344,
            "unit": "ns",
            "range": "± 92978.43530726612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2645802.864864865,
            "unit": "ns",
            "range": "± 88705.84202988681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2227591.391891892,
            "unit": "ns",
            "range": "± 108464.48007297989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5571830.588235294,
            "unit": "ns",
            "range": "± 108242.04326938934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5937071.6015625,
            "unit": "ns",
            "range": "± 16191.02338994943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957014.8878348214,
            "unit": "ns",
            "range": "± 1582.1982563399654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341693.2650669643,
            "unit": "ns",
            "range": "± 2144.1241563813946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2535706.7953125,
            "unit": "ns",
            "range": "± 11788.953102306503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799116.1331129808,
            "unit": "ns",
            "range": "± 974.3053812763218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743141.0829427083,
            "unit": "ns",
            "range": "± 576.510483266259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335435.57446808513,
            "unit": "ns",
            "range": "± 12934.19992776932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268879.36842105264,
            "unit": "ns",
            "range": "± 4788.405605795528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236619.15789473685,
            "unit": "ns",
            "range": "± 4955.436389160651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5604540.8,
            "unit": "ns",
            "range": "± 38148.514283371136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4044124.1428571427,
            "unit": "ns",
            "range": "± 25172.38151643168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18281.936842105264,
            "unit": "ns",
            "range": "± 1428.6648268428835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86855.15584415584,
            "unit": "ns",
            "range": "± 4219.066069843991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79492.82222222222,
            "unit": "ns",
            "range": "± 3035.342217406083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 202399,
            "unit": "ns",
            "range": "± 3593.066014508415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5239.108695652174,
            "unit": "ns",
            "range": "± 421.4090559670345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16306.333333333334,
            "unit": "ns",
            "range": "± 1034.7929884694365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3284373.1363636362,
            "unit": "ns",
            "range": "± 79476.27528975486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3405033.048780488,
            "unit": "ns",
            "range": "± 106567.93892183315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4205187.142857143,
            "unit": "ns",
            "range": "± 41786.51120757868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4364185.714285715,
            "unit": "ns",
            "range": "± 54956.64851418878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7240699.588235294,
            "unit": "ns",
            "range": "± 146282.86927177207"
          }
        ]
      }
    ]
  }
}