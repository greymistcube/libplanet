window.BENCHMARK_DATA = {
  "lastUpdate": 1701754283533,
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
          "id": "b2db8c579299ad0e6329bf76eef78013bb687af1",
          "message": "Prepare 3.9.1",
          "timestamp": "2023-12-05T14:12:03+09:00",
          "tree_id": "23990157ea6683c0744454ad72efa3c105fe0488",
          "url": "https://github.com/greymistcube/libplanet/commit/b2db8c579299ad0e6329bf76eef78013bb687af1"
        },
        "date": 1701754263872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9401388.55882353,
            "unit": "ns",
            "range": "± 184297.41350106848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23575893.555555556,
            "unit": "ns",
            "range": "± 460871.5821371339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58601653.9375,
            "unit": "ns",
            "range": "± 1778232.295285385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119346987.62903225,
            "unit": "ns",
            "range": "± 3610854.6927278377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241051200.6470588,
            "unit": "ns",
            "range": "± 4833897.978122353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41985.00515463918,
            "unit": "ns",
            "range": "± 10883.247170846758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287019.2580645161,
            "unit": "ns",
            "range": "± 18635.989222529723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276161.7303370786,
            "unit": "ns",
            "range": "± 15443.082058705451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262393.75,
            "unit": "ns",
            "range": "± 10204.454318393033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4645600.05882353,
            "unit": "ns",
            "range": "± 88986.07279967368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4148305,
            "unit": "ns",
            "range": "± 57387.996212913145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23610.641304347828,
            "unit": "ns",
            "range": "± 2388.254448228663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95599.28571428571,
            "unit": "ns",
            "range": "± 5637.793321135642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94243.54651162791,
            "unit": "ns",
            "range": "± 3504.531623847481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96449.02150537634,
            "unit": "ns",
            "range": "± 12892.06454271175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5921.9795918367345,
            "unit": "ns",
            "range": "± 2244.865633154782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19718.42391304348,
            "unit": "ns",
            "range": "± 3148.3950079390115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030767.4536082475,
            "unit": "ns",
            "range": "± 96778.39906747233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2192794.2784810127,
            "unit": "ns",
            "range": "± 109753.98422672135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1517690.152173913,
            "unit": "ns",
            "range": "± 109029.70192797953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7000087.954022989,
            "unit": "ns",
            "range": "± 486182.5936094023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3542222.2216494847,
            "unit": "ns",
            "range": "± 218544.77827599304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3596691.1558441557,
            "unit": "ns",
            "range": "± 182255.65589108938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4248021.485507246,
            "unit": "ns",
            "range": "± 204857.4408980758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4266122.892473118,
            "unit": "ns",
            "range": "± 274504.63017824065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17289174.732323233,
            "unit": "ns",
            "range": "± 3103545.0526593653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5646843.752403846,
            "unit": "ns",
            "range": "± 83022.8179384095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1671035.5447823661,
            "unit": "ns",
            "range": "± 13521.427067374152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1016552.3650350765,
            "unit": "ns",
            "range": "± 101832.31227843539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2347691.496953125,
            "unit": "ns",
            "range": "± 257397.69850291125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 714757.1790930707,
            "unit": "ns",
            "range": "± 17312.37442176636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 634929.7815290178,
            "unit": "ns",
            "range": "± 32169.088587735932"
          }
        ]
      }
    ]
  }
}