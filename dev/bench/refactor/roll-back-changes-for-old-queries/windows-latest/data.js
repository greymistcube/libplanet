window.BENCHMARK_DATA = {
  "lastUpdate": 1704203617971,
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
          "id": "f12184e29d683f480dd46778870e43c10233e50a",
          "message": "Roll back exposed GraphQL API changes by adding LegacyBencodexValueType",
          "timestamp": "2024-01-02T22:40:20+09:00",
          "tree_id": "f983da298ebf7f6783db8aa8342ab7ceefac443f",
          "url": "https://github.com/greymistcube/libplanet/commit/f12184e29d683f480dd46778870e43c10233e50a"
        },
        "date": 1704203595978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956234.7368421053,
            "unit": "ns",
            "range": "± 115307.9067322931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1744685.9649122807,
            "unit": "ns",
            "range": "± 75530.38045003692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1364495.918367347,
            "unit": "ns",
            "range": "± 87758.04855545337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5334283.561643835,
            "unit": "ns",
            "range": "± 261887.98390708247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33809.77011494253,
            "unit": "ns",
            "range": "± 2402.298307005332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5023813.333333333,
            "unit": "ns",
            "range": "± 33662.18452012089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13097028.57142857,
            "unit": "ns",
            "range": "± 92027.44096251884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32186473.333333332,
            "unit": "ns",
            "range": "± 319747.349964818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64800578.571428575,
            "unit": "ns",
            "range": "± 497524.4411136949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130296653.33333333,
            "unit": "ns",
            "range": "± 1058378.160790412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285877.1334134615,
            "unit": "ns",
            "range": "± 6590.031051322137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065609.765625,
            "unit": "ns",
            "range": "± 3355.581181793725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736222.7678571428,
            "unit": "ns",
            "range": "± 1145.928037608578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925425.376674107,
            "unit": "ns",
            "range": "± 7647.298843449205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617860.44921875,
            "unit": "ns",
            "range": "± 1844.6880515663981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555792.3409598215,
            "unit": "ns",
            "range": "± 1045.8997517267885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2111916.129032258,
            "unit": "ns",
            "range": "± 63328.277500519434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2241884.745762712,
            "unit": "ns",
            "range": "± 98548.34069101057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2726355.128205128,
            "unit": "ns",
            "range": "± 93466.61928398753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2522425.806451613,
            "unit": "ns",
            "range": "± 83044.27208656931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6201569.565217392,
            "unit": "ns",
            "range": "± 298863.30059486267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170839.2857142857,
            "unit": "ns",
            "range": "± 8796.2617725029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161122.22222222222,
            "unit": "ns",
            "range": "± 7357.2532664874425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139152.1739130435,
            "unit": "ns",
            "range": "± 3519.797200410247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731447.8260869565,
            "unit": "ns",
            "range": "± 67593.32181621346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2435853.3333333335,
            "unit": "ns",
            "range": "± 28745.10807242231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10277.659574468085,
            "unit": "ns",
            "range": "± 1128.4354241693438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51267.74193548387,
            "unit": "ns",
            "range": "± 4728.708834029289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43865.625,
            "unit": "ns",
            "range": "± 2026.5866799691967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56051.54639175258,
            "unit": "ns",
            "range": "± 11623.405924775072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2644.7916666666665,
            "unit": "ns",
            "range": "± 573.6071994825776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9884.946236559139,
            "unit": "ns",
            "range": "± 1755.6707027923235"
          }
        ]
      }
    ]
  }
}