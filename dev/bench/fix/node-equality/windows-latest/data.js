window.BENCHMARK_DATA = {
  "lastUpdate": 1692332531004,
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
          "id": "b327162b0138de3d8d4152ec0c253021c659619a",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:06:35+09:00",
          "tree_id": "1dff3457ca856391c36cd0caec5a2543921a250f",
          "url": "https://github.com/greymistcube/libplanet/commit/b327162b0138de3d8d4152ec0c253021c659619a"
        },
        "date": 1692332507451,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346870,
            "unit": "ns",
            "range": "± 115400.71468364028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2415233.3333333335,
            "unit": "ns",
            "range": "± 119267.76124854293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683417.3469387756,
            "unit": "ns",
            "range": "± 131600.50451561724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4262997.5,
            "unit": "ns",
            "range": "± 142301.09732985916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45888.88888888889,
            "unit": "ns",
            "range": "± 2567.359700200234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7023366.666666667,
            "unit": "ns",
            "range": "± 47244.75279506356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17897353.333333332,
            "unit": "ns",
            "range": "± 69198.89415576633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46619920,
            "unit": "ns",
            "range": "± 238514.92376189557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92700793.33333333,
            "unit": "ns",
            "range": "± 669912.4329414434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185780140,
            "unit": "ns",
            "range": "± 1432946.680196341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4301368.569711538,
            "unit": "ns",
            "range": "± 5052.68420054095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1393900.48828125,
            "unit": "ns",
            "range": "± 2377.880382757404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1040330.4817708334,
            "unit": "ns",
            "range": "± 1031.9992196540234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543172.421875,
            "unit": "ns",
            "range": "± 3507.8938299661313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801450.2790178572,
            "unit": "ns",
            "range": "± 1412.5968919905854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716886.3151041666,
            "unit": "ns",
            "range": "± 961.1183865467201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3072418.75,
            "unit": "ns",
            "range": "± 44577.81539061778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3195406.25,
            "unit": "ns",
            "range": "± 124078.13325318747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3918072.222222222,
            "unit": "ns",
            "range": "± 82160.2365936478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3561466.6666666665,
            "unit": "ns",
            "range": "± 51763.63404479838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5730264.285714285,
            "unit": "ns",
            "range": "± 139616.4911576516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260110.52631578947,
            "unit": "ns",
            "range": "± 11261.164051263693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242222.5806451613,
            "unit": "ns",
            "range": "± 11005.012559184834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220416.32653061225,
            "unit": "ns",
            "range": "± 14279.432934231192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3800807.6923076925,
            "unit": "ns",
            "range": "± 20566.536798825317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3484821.4285714286,
            "unit": "ns",
            "range": "± 35597.8430325691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18940.816326530614,
            "unit": "ns",
            "range": "± 1844.9058721941535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82768.08510638298,
            "unit": "ns",
            "range": "± 5205.150732036169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65108.19672131148,
            "unit": "ns",
            "range": "± 2943.1442983067845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72980.89887640449,
            "unit": "ns",
            "range": "± 9137.981132768859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4346.590909090909,
            "unit": "ns",
            "range": "± 485.7625510559243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18398.989898989897,
            "unit": "ns",
            "range": "± 1925.7383926794898"
          }
        ]
      }
    ]
  }
}