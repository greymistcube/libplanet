window.BENCHMARK_DATA = {
  "lastUpdate": 1695633238031,
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
          "id": "9e2337db7082191af93ca9d37398767723023f8a",
          "message": "Prepare 3.5.0",
          "timestamp": "2023-09-25T17:56:05+09:00",
          "tree_id": "0c99da6c0667ced3d6e43cb95f5270ef67333bc0",
          "url": "https://github.com/greymistcube/libplanet/commit/9e2337db7082191af93ca9d37398767723023f8a"
        },
        "date": 1695633211574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365038.4210526317,
            "unit": "ns",
            "range": "± 115036.64805798444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2601672.972972973,
            "unit": "ns",
            "range": "± 86068.33089227758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050679.1666666667,
            "unit": "ns",
            "range": "± 132986.11792741192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9350136.363636363,
            "unit": "ns",
            "range": "± 640821.3687982511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55698.94736842105,
            "unit": "ns",
            "range": "± 5235.222256186315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8341407.142857143,
            "unit": "ns",
            "range": "± 72943.6923438021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21702984.615384616,
            "unit": "ns",
            "range": "± 182025.46912521997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54201807.14285714,
            "unit": "ns",
            "range": "± 287033.76500465453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108597050,
            "unit": "ns",
            "range": "± 1695506.0579366859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217616471.42857143,
            "unit": "ns",
            "range": "± 2118715.5515433517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4671512.708333333,
            "unit": "ns",
            "range": "± 29455.184810188865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1438949.5814732143,
            "unit": "ns",
            "range": "± 3938.190660545976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086858.88671875,
            "unit": "ns",
            "range": "± 11211.326377861911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689441.8805803573,
            "unit": "ns",
            "range": "± 13525.283083202507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856272.7748325893,
            "unit": "ns",
            "range": "± 5478.800074642328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780582.5544084822,
            "unit": "ns",
            "range": "± 2929.648544564512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3577614.285714286,
            "unit": "ns",
            "range": "± 99334.07797739429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3741714.285714286,
            "unit": "ns",
            "range": "± 48215.82659320417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4407668.181818182,
            "unit": "ns",
            "range": "± 104488.37887701349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4418815.384615385,
            "unit": "ns",
            "range": "± 118042.1948027321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10540231.034482758,
            "unit": "ns",
            "range": "± 304651.55283589184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270490.243902439,
            "unit": "ns",
            "range": "± 9585.922096440403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257877.77777777778,
            "unit": "ns",
            "range": "± 9385.382466389106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255493.18181818182,
            "unit": "ns",
            "range": "± 9548.441921536942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291860,
            "unit": "ns",
            "range": "± 49240.09400014237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3932153.846153846,
            "unit": "ns",
            "range": "± 50437.661447649334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26792.78350515464,
            "unit": "ns",
            "range": "± 2669.201168837801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104249.48453608247,
            "unit": "ns",
            "range": "± 7906.604882830296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97238.88888888889,
            "unit": "ns",
            "range": "± 9746.657081432511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92840.69767441861,
            "unit": "ns",
            "range": "± 10502.138470268825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7259.183673469388,
            "unit": "ns",
            "range": "± 1061.105894099917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23975,
            "unit": "ns",
            "range": "± 2421.2654368716935"
          }
        ]
      }
    ]
  }
}