window.BENCHMARK_DATA = {
  "lastUpdate": 1707289375223,
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
          "id": "1a91f6c432730d5ff7544165cd18c0253840f049",
          "message": "Prepare 4.0.5",
          "timestamp": "2024-02-07T15:51:40+09:00",
          "tree_id": "3d806d9db013e1f653f5897c9fb66ad9b584d62e",
          "url": "https://github.com/greymistcube/libplanet/commit/1a91f6c432730d5ff7544165cd18c0253840f049"
        },
        "date": 1707289368718,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956729.0337078652,
            "unit": "ns",
            "range": "± 60028.72466529698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919685.3846153845,
            "unit": "ns",
            "range": "± 99103.22628310481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1611337.5979381443,
            "unit": "ns",
            "range": "± 167105.91695336896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12532505.966666667,
            "unit": "ns",
            "range": "± 1008467.1672992604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39513.90625,
            "unit": "ns",
            "range": "± 5636.411606833264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195550.84,
            "unit": "ns",
            "range": "± 7038.210061644703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191384.92857142858,
            "unit": "ns",
            "range": "± 8683.307279681172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168954,
            "unit": "ns",
            "range": "± 3364.5832022703794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149676.285714286,
            "unit": "ns",
            "range": "± 40764.30259511297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2729321.8571428573,
            "unit": "ns",
            "range": "± 31172.58631420376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16044.836734693878,
            "unit": "ns",
            "range": "± 1986.768669539943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62904.46808510638,
            "unit": "ns",
            "range": "± 6679.115680072302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51819,
            "unit": "ns",
            "range": "± 1144.9039950558024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64228.255102040814,
            "unit": "ns",
            "range": "± 10217.846609046577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2933.3118279569894,
            "unit": "ns",
            "range": "± 293.9925309053684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14113.183673469388,
            "unit": "ns",
            "range": "± 2221.606771309593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5553707.6,
            "unit": "ns",
            "range": "± 39947.667253187996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14231292.166666666,
            "unit": "ns",
            "range": "± 137769.21317845117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36182405.21428572,
            "unit": "ns",
            "range": "± 494174.7016459211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75172951.76666667,
            "unit": "ns",
            "range": "± 1002043.8522475997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147589461,
            "unit": "ns",
            "range": "± 547049.3323645501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429502.287878788,
            "unit": "ns",
            "range": "± 76175.24559312132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531560.0322580645,
            "unit": "ns",
            "range": "± 76755.93372132383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3126957.9166666665,
            "unit": "ns",
            "range": "± 36639.66867768602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3091582.507936508,
            "unit": "ns",
            "range": "± 130847.88278734735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13841438.242105262,
            "unit": "ns",
            "range": "± 1047672.728419811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3761852.4576322115,
            "unit": "ns",
            "range": "± 11586.73483123126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203598.315074574,
            "unit": "ns",
            "range": "± 29063.080597334174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741580.9740084135,
            "unit": "ns",
            "range": "± 6006.245889725107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969465.3231770834,
            "unit": "ns",
            "range": "± 22997.37856886639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611990.9427584135,
            "unit": "ns",
            "range": "± 1741.7731047565915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566164.8806340144,
            "unit": "ns",
            "range": "± 439.27271099975076"
          }
        ]
      }
    ]
  }
}