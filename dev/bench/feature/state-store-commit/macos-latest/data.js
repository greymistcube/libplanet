window.BENCHMARK_DATA = {
  "lastUpdate": 1690963926435,
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
          "id": "9378f081b0be228a89dd695049564cd1e9fa248f",
          "message": "Fix tests; update to new API",
          "timestamp": "2023-08-02T16:53:42+09:00",
          "tree_id": "0ad558a6ae1dac5b762861ec861e86be87aee7bd",
          "url": "https://github.com/greymistcube/libplanet/commit/9378f081b0be228a89dd695049564cd1e9fa248f"
        },
        "date": 1690963909140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11788996.11,
            "unit": "ns",
            "range": "± 2049061.2881073128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24725058.040816326,
            "unit": "ns",
            "range": "± 3565751.403788395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60792783.09,
            "unit": "ns",
            "range": "± 8080618.422371763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125596225.27,
            "unit": "ns",
            "range": "± 13993152.504979799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263293824.61,
            "unit": "ns",
            "range": "± 20156032.365612946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70683.52577319587,
            "unit": "ns",
            "range": "± 12274.148896234436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333223.6179775281,
            "unit": "ns",
            "range": "± 27462.947246122538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313563.032967033,
            "unit": "ns",
            "range": "± 20741.847851063776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304039.54545454547,
            "unit": "ns",
            "range": "± 7386.150590493979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208024.594594595,
            "unit": "ns",
            "range": "± 138492.74521802767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3873390.120689655,
            "unit": "ns",
            "range": "± 249251.23624303256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18953.231958762888,
            "unit": "ns",
            "range": "± 3656.924039053244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83314.69473684211,
            "unit": "ns",
            "range": "± 7552.224485700807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84044.30612244898,
            "unit": "ns",
            "range": "± 11366.8412838089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111833.52040816327,
            "unit": "ns",
            "range": "± 24167.44097548813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4512.5329670329675,
            "unit": "ns",
            "range": "± 668.4716141326413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16833.391304347828,
            "unit": "ns",
            "range": "± 1733.0489486408321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561861.3157894737,
            "unit": "ns",
            "range": "± 144443.81716979117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3159487.474226804,
            "unit": "ns",
            "range": "± 418158.9543960101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202144.047368421,
            "unit": "ns",
            "range": "± 335473.2364786226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6187256.425531914,
            "unit": "ns",
            "range": "± 726804.770772452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4285880.49,
            "unit": "ns",
            "range": "± 824328.9439087082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4170775.44,
            "unit": "ns",
            "range": "± 801769.9319669447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4891575.59375,
            "unit": "ns",
            "range": "± 606157.7312198889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4285894,
            "unit": "ns",
            "range": "± 706709.3051130526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7508786.598901099,
            "unit": "ns",
            "range": "± 781340.9887770448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6206319.534598215,
            "unit": "ns",
            "range": "± 90751.03609602092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1916750.39609375,
            "unit": "ns",
            "range": "± 30728.93446113211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1265217.2337239583,
            "unit": "ns",
            "range": "± 20814.289974177285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2541685.1127929688,
            "unit": "ns",
            "range": "± 49802.52192837737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776087.1713169643,
            "unit": "ns",
            "range": "± 8773.697150175169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723526.6436941965,
            "unit": "ns",
            "range": "± 6785.710754400933"
          }
        ]
      }
    ]
  }
}