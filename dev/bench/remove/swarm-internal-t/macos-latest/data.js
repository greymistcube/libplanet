window.BENCHMARK_DATA = {
  "lastUpdate": 1684467215843,
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
          "id": "8aba8aef32232d502aaa8404b23532abd679bd9e",
          "message": "Removed t from BlockCompletion",
          "timestamp": "2023-05-19T12:13:30+09:00",
          "tree_id": "758f003cc68e38226c3434603c44a525979ac94b",
          "url": "https://github.com/greymistcube/libplanet/commit/8aba8aef32232d502aaa8404b23532abd679bd9e"
        },
        "date": 1684467202479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7929665.357142857,
            "unit": "ns",
            "range": "± 130468.4043943544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19142038,
            "unit": "ns",
            "range": "± 517879.1683393338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46944816.90625,
            "unit": "ns",
            "range": "± 1448385.638039822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91938992.21428572,
            "unit": "ns",
            "range": "± 993103.7506191756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199204314.85714287,
            "unit": "ns",
            "range": "± 2193173.1914993664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64902.51063829787,
            "unit": "ns",
            "range": "± 10600.44762469829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306732.84444444446,
            "unit": "ns",
            "range": "± 18584.780513623922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296177.8101265823,
            "unit": "ns",
            "range": "± 15285.607522610306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276808.85714285716,
            "unit": "ns",
            "range": "± 19226.626802592946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4116051.8571428573,
            "unit": "ns",
            "range": "± 35926.483884256115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3636731.6428571427,
            "unit": "ns",
            "range": "± 38723.7968589126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15819.684210526315,
            "unit": "ns",
            "range": "± 1636.6169586769201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79678.68421052632,
            "unit": "ns",
            "range": "± 5931.240081063666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79374.31034482758,
            "unit": "ns",
            "range": "± 4697.131762886262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98440.16326530612,
            "unit": "ns",
            "range": "± 14067.70096450297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5054.868131868132,
            "unit": "ns",
            "range": "± 603.7396828433631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15447.967032967033,
            "unit": "ns",
            "range": "± 1375.3661771045997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1686813.0967741935,
            "unit": "ns",
            "range": "± 155395.17239270313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989903.706185567,
            "unit": "ns",
            "range": "± 185805.96577747096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2667239.4693877553,
            "unit": "ns",
            "range": "± 256283.31043433055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6944023.283505155,
            "unit": "ns",
            "range": "± 481643.6308147781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3202700.6153846155,
            "unit": "ns",
            "range": "± 158658.2979015563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3388036.84,
            "unit": "ns",
            "range": "± 125242.39856950707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4408989,
            "unit": "ns",
            "range": "± 205574.40155053727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4335248.157894737,
            "unit": "ns",
            "range": "± 144423.66971004073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7490574.390243903,
            "unit": "ns",
            "range": "± 239615.55292852735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6383440.612723215,
            "unit": "ns",
            "range": "± 36996.8729899394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984917.4846354167,
            "unit": "ns",
            "range": "± 19543.005239211587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1259921.4381975445,
            "unit": "ns",
            "range": "± 6748.06738533092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2468619.693359375,
            "unit": "ns",
            "range": "± 32231.88781699246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786829.4102313702,
            "unit": "ns",
            "range": "± 4077.005557629147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716797.4462890625,
            "unit": "ns",
            "range": "± 7152.332960549484"
          }
        ]
      }
    ]
  }
}