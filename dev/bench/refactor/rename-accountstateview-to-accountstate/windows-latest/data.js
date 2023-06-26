window.BENCHMARK_DATA = {
  "lastUpdate": 1687782959477,
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
          "id": "7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39",
          "message": "Consistent API across IBlockChainStates, IBlockStates, and IAccountState",
          "timestamp": "2023-06-26T21:18:27+09:00",
          "tree_id": "854e42435068d707308c2e422a6d234a2bb48784",
          "url": "https://github.com/greymistcube/libplanet/commit/7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39"
        },
        "date": 1687782936625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441861.224489796,
            "unit": "ns",
            "range": "± 99717.96789011825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648751.785714286,
            "unit": "ns",
            "range": "± 114021.73395864082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2468394.736842105,
            "unit": "ns",
            "range": "± 53539.78244346504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5610339.7727272725,
            "unit": "ns",
            "range": "± 308223.0255146734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48159.278350515466,
            "unit": "ns",
            "range": "± 3645.2332594038357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6921907.142857143,
            "unit": "ns",
            "range": "± 105576.96036749477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20039186.666666668,
            "unit": "ns",
            "range": "± 317930.62106302974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49502126.666666664,
            "unit": "ns",
            "range": "± 829493.3380139492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100311704.76190476,
            "unit": "ns",
            "range": "± 2352584.207308251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200853900,
            "unit": "ns",
            "range": "± 3246434.9400534737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886494.029017857,
            "unit": "ns",
            "range": "± 27723.778475085546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529495.5078125,
            "unit": "ns",
            "range": "± 7502.192038498884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185245.982142857,
            "unit": "ns",
            "range": "± 7226.84783566197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655277.511160714,
            "unit": "ns",
            "range": "± 10567.633363828623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841367.3758370535,
            "unit": "ns",
            "range": "± 3147.1693619625457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772610.78125,
            "unit": "ns",
            "range": "± 4790.449104752096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232366.037735849,
            "unit": "ns",
            "range": "± 134219.470018606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462217.6470588236,
            "unit": "ns",
            "range": "± 109323.93752288663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4206185.9375,
            "unit": "ns",
            "range": "± 190466.32403855002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4299842,
            "unit": "ns",
            "range": "± 171332.8757782609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6692981.578947368,
            "unit": "ns",
            "range": "± 230549.9182099806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283901.69491525425,
            "unit": "ns",
            "range": "± 11822.530966634964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263236.84210526315,
            "unit": "ns",
            "range": "± 5717.440232045941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247412.12121212122,
            "unit": "ns",
            "range": "± 17946.134099800292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4121321.4285714286,
            "unit": "ns",
            "range": "± 44973.34986191487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3657200,
            "unit": "ns",
            "range": "± 51426.869019442136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24588.659793814433,
            "unit": "ns",
            "range": "± 3029.0219917993536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104545.91836734694,
            "unit": "ns",
            "range": "± 12402.071396387882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96077.77777777778,
            "unit": "ns",
            "range": "± 14363.598801189832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113055.20833333333,
            "unit": "ns",
            "range": "± 16614.127595080463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6591.578947368421,
            "unit": "ns",
            "range": "± 1131.4332050211415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22035.106382978724,
            "unit": "ns",
            "range": "± 2400.300494038038"
          }
        ]
      }
    ]
  }
}