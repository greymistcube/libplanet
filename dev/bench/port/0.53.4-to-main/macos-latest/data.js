window.BENCHMARK_DATA = {
  "lastUpdate": 1680664345670,
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
          "id": "f447ded783a1a25394a0bca86199f7e59a4bc226",
          "message": "Merge tag '0.53.4' into port/0.53.4-to-main\n\nLibplanet 0.53.4",
          "timestamp": "2023-04-05T11:50:52+09:00",
          "tree_id": "6c6797cf881deada6e66d7f68eedc5e7c54df135",
          "url": "https://github.com/greymistcube/libplanet/commit/f447ded783a1a25394a0bca86199f7e59a4bc226"
        },
        "date": 1680664329427,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8249426.423076923,
            "unit": "ns",
            "range": "± 290594.02304450463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20138248.363636363,
            "unit": "ns",
            "range": "± 404283.6593808086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55223585.31034483,
            "unit": "ns",
            "range": "± 1608364.8128527952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111910906.87096775,
            "unit": "ns",
            "range": "± 3386081.363869389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215848098.66129032,
            "unit": "ns",
            "range": "± 5690684.29279086"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72872.51111111112,
            "unit": "ns",
            "range": "± 8129.327397989049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391908.5879120879,
            "unit": "ns",
            "range": "± 30034.328118430065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337299.8469387755,
            "unit": "ns",
            "range": "± 40309.253379687856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326752.01612903224,
            "unit": "ns",
            "range": "± 39136.036433304995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5573214.47368421,
            "unit": "ns",
            "range": "± 190716.11410053266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4407736.03125,
            "unit": "ns",
            "range": "± 308055.50526035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23295.191489361703,
            "unit": "ns",
            "range": "± 3756.4827356960805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113872.71739130435,
            "unit": "ns",
            "range": "± 18887.671036498676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120434.20689655172,
            "unit": "ns",
            "range": "± 9403.827308586613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 274434.5106382979,
            "unit": "ns",
            "range": "± 33137.10058260063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9516.215789473685,
            "unit": "ns",
            "range": "± 1179.139423506478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24219.736559139787,
            "unit": "ns",
            "range": "± 3967.1185205984193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738209.0869565217,
            "unit": "ns",
            "range": "± 223462.72589373935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023305.0102040814,
            "unit": "ns",
            "range": "± 120136.25039948088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2649689.0736842104,
            "unit": "ns",
            "range": "± 241933.33143254096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6937272.202898551,
            "unit": "ns",
            "range": "± 330591.76025822945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3498330.7391304346,
            "unit": "ns",
            "range": "± 347213.6945584696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3612058.282608696,
            "unit": "ns",
            "range": "± 209067.7023382526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4443018.191489362,
            "unit": "ns",
            "range": "± 171186.84698491427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4841520.725806451,
            "unit": "ns",
            "range": "± 465679.1816020872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9392835.406593407,
            "unit": "ns",
            "range": "± 518788.4461296976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7400011.907670454,
            "unit": "ns",
            "range": "± 159215.05118544778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2195838.9888321315,
            "unit": "ns",
            "range": "± 112787.08608382235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1431401.945090554,
            "unit": "ns",
            "range": "± 52335.381352720164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3376876.6771030617,
            "unit": "ns",
            "range": "± 301125.9563245402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 877997.9741015625,
            "unit": "ns",
            "range": "± 59864.45732766844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805205.1447610294,
            "unit": "ns",
            "range": "± 16384.77260266942"
          }
        ]
      }
    ]
  }
}