window.BENCHMARK_DATA = {
  "lastUpdate": 1704865828855,
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
          "id": "c2c91f158d66c99735446b52331b68c5a2f18328",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T13:49:52+09:00",
          "tree_id": "e873ef18847f0b94944d2301a00558690c39a59a",
          "url": "https://github.com/greymistcube/libplanet/commit/c2c91f158d66c99735446b52331b68c5a2f18328"
        },
        "date": 1704865812865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9341955.04,
            "unit": "ns",
            "range": "± 565871.6020377557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23497879.55102041,
            "unit": "ns",
            "range": "± 1368674.2072933065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54949574.88,
            "unit": "ns",
            "range": "± 2077614.1395956129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110529171.54761904,
            "unit": "ns",
            "range": "± 4027124.229718808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227061072.3125,
            "unit": "ns",
            "range": "± 4232064.271245837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73404.2741935484,
            "unit": "ns",
            "range": "± 11742.511942518788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332921.3370786517,
            "unit": "ns",
            "range": "± 32234.69123755556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326238.86363636365,
            "unit": "ns",
            "range": "± 34604.273728212436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302132.27777777775,
            "unit": "ns",
            "range": "± 5375.675397298854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4534284.429411764,
            "unit": "ns",
            "range": "± 321007.995160178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3834558.0714285714,
            "unit": "ns",
            "range": "± 45133.252356369536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23263.915789473685,
            "unit": "ns",
            "range": "± 4176.634009870582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106633.13043478261,
            "unit": "ns",
            "range": "± 12928.49760546244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119256.48913043478,
            "unit": "ns",
            "range": "± 13490.600746237586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122491.74736842106,
            "unit": "ns",
            "range": "± 23038.98463473007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8022.239130434783,
            "unit": "ns",
            "range": "± 1013.5063753906421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23465.134831460673,
            "unit": "ns",
            "range": "± 2770.0605022561053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517921.75,
            "unit": "ns",
            "range": "± 185262.7613781629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800895.088235294,
            "unit": "ns",
            "range": "± 147975.30374423115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2559334.0656565656,
            "unit": "ns",
            "range": "± 270887.2685584247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 27216073.85263158,
            "unit": "ns",
            "range": "± 3610537.265208353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3635594.1875,
            "unit": "ns",
            "range": "± 328935.17180359294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3787013.9191919193,
            "unit": "ns",
            "range": "± 383305.0303339891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4478094.4375,
            "unit": "ns",
            "range": "± 324097.08602288045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4903305.739583333,
            "unit": "ns",
            "range": "± 505880.19969015644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33229403.66,
            "unit": "ns",
            "range": "± 4465723.695538997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6448843.747282608,
            "unit": "ns",
            "range": "± 158944.0804068323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945283.6959635417,
            "unit": "ns",
            "range": "± 22567.757395419332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168202.4244791667,
            "unit": "ns",
            "range": "± 21144.74219650399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3091372.7392241377,
            "unit": "ns",
            "range": "± 87730.36845122211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839733.5806640625,
            "unit": "ns",
            "range": "± 13153.01525970754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796359.4554443359,
            "unit": "ns",
            "range": "± 14824.720062658962"
          }
        ]
      }
    ]
  }
}