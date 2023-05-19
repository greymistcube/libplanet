window.BENCHMARK_DATA = {
  "lastUpdate": 1684517801104,
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
          "id": "68d72fa93f4e3833d3644989a12e7ee6a6104083",
          "message": "Remove PolymorphicAction",
          "timestamp": "2023-05-20T02:15:50+09:00",
          "tree_id": "cc65e3b81a1823674df671524a9a003f9bb5bec4",
          "url": "https://github.com/greymistcube/libplanet/commit/68d72fa93f4e3833d3644989a12e7ee6a6104083"
        },
        "date": 1684517767350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666686.170212766,
            "unit": "ns",
            "range": "± 158706.1773235651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3077561.5384615385,
            "unit": "ns",
            "range": "± 125893.40052451497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2599097.8947368423,
            "unit": "ns",
            "range": "± 162378.19459714132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6369728.571428572,
            "unit": "ns",
            "range": "± 309698.27258382936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56675.555555555555,
            "unit": "ns",
            "range": "± 3772.44030670671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8986088.235294119,
            "unit": "ns",
            "range": "± 177180.19035135157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23856206.666666668,
            "unit": "ns",
            "range": "± 436023.89919208176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59890800,
            "unit": "ns",
            "range": "± 1264622.1011921028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122683118.18181819,
            "unit": "ns",
            "range": "± 2881579.0685360534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240632025,
            "unit": "ns",
            "range": "± 4688169.319254586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5878798.4375,
            "unit": "ns",
            "range": "± 106488.7704644845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1899419.2908653845,
            "unit": "ns",
            "range": "± 11617.23089690119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1431672.6041666667,
            "unit": "ns",
            "range": "± 17023.44786144256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214311.328125,
            "unit": "ns",
            "range": "± 37988.78999642124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032415.4188368055,
            "unit": "ns",
            "range": "± 20986.76157893183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919373.22265625,
            "unit": "ns",
            "range": "± 14050.311983801674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3843025.925925926,
            "unit": "ns",
            "range": "± 106857.85883266608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4033847.3684210526,
            "unit": "ns",
            "range": "± 166892.63882729172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4947535.294117647,
            "unit": "ns",
            "range": "± 151348.81421756296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5000525,
            "unit": "ns",
            "range": "± 188295.46214348817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7838025,
            "unit": "ns",
            "range": "± 223252.48723262985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307627.4193548387,
            "unit": "ns",
            "range": "± 13389.256389871605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296317.5438596491,
            "unit": "ns",
            "range": "± 12883.462860901202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273835.9550561798,
            "unit": "ns",
            "range": "± 15138.326189382327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4828516.666666667,
            "unit": "ns",
            "range": "± 73860.19758895035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4281792.307692308,
            "unit": "ns",
            "range": "± 44030.94482933681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24544.791666666668,
            "unit": "ns",
            "range": "± 1947.4069015875646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104234.40860215054,
            "unit": "ns",
            "range": "± 7624.410092985039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90095.78947368421,
            "unit": "ns",
            "range": "± 6288.623903009707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106775.86206896552,
            "unit": "ns",
            "range": "± 9230.661312160877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7071.578947368421,
            "unit": "ns",
            "range": "± 1034.990302955369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23014.432989690722,
            "unit": "ns",
            "range": "± 2838.940151811413"
          }
        ]
      }
    ]
  }
}