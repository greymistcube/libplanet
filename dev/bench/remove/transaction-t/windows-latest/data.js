window.BENCHMARK_DATA = {
  "lastUpdate": 1682676291062,
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
          "id": "fe1b7be5dbef726cda8b35ac5aa658e6ae372266",
          "message": "Partially removed t from transaction",
          "timestamp": "2023-04-28T18:39:17+09:00",
          "tree_id": "f6b5624d4eb813142323df63ac2449af272bad92",
          "url": "https://github.com/greymistcube/libplanet/commit/fe1b7be5dbef726cda8b35ac5aa658e6ae372266"
        },
        "date": 1682676265854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632156.5656565656,
            "unit": "ns",
            "range": "± 127495.48544357596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011742.4657534244,
            "unit": "ns",
            "range": "± 149242.13911720802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2566488.5057471264,
            "unit": "ns",
            "range": "± 140259.82486441743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6303097.97979798,
            "unit": "ns",
            "range": "± 409258.5271398673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58339.784946236556,
            "unit": "ns",
            "range": "± 5379.816139272755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8380136.666666667,
            "unit": "ns",
            "range": "± 97116.45341449369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23162650,
            "unit": "ns",
            "range": "± 187749.14831313535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58346022.72727273,
            "unit": "ns",
            "range": "± 1367018.9401731815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117161833.33333333,
            "unit": "ns",
            "range": "± 829052.3048893986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238033133.33333334,
            "unit": "ns",
            "range": "± 3971495.623757353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5841452.232142857,
            "unit": "ns",
            "range": "± 42311.65527289155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845582.2135416667,
            "unit": "ns",
            "range": "± 15198.126415080602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422622.8515625,
            "unit": "ns",
            "range": "± 12335.408704987993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3225246.2890625,
            "unit": "ns",
            "range": "± 32092.24410909913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986489.2277644231,
            "unit": "ns",
            "range": "± 4396.235543250608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924339.12109375,
            "unit": "ns",
            "range": "± 8420.163895306641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3746872.222222222,
            "unit": "ns",
            "range": "± 79081.66148359895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4037543.75,
            "unit": "ns",
            "range": "± 78394.9315432233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4680394.736842105,
            "unit": "ns",
            "range": "± 101996.16808534312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4960616.666666667,
            "unit": "ns",
            "range": "± 164111.8494894782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7725952.631578947,
            "unit": "ns",
            "range": "± 335524.6223162336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317480,
            "unit": "ns",
            "range": "± 10152.180516064971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303625,
            "unit": "ns",
            "range": "± 6900.638795754614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257512.32876712328,
            "unit": "ns",
            "range": "± 12755.771517298435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4635992.105263158,
            "unit": "ns",
            "range": "± 98403.76187360518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4197626.666666667,
            "unit": "ns",
            "range": "± 58772.217278315475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25146.315789473683,
            "unit": "ns",
            "range": "± 2468.8618502027084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114095.65217391304,
            "unit": "ns",
            "range": "± 7412.684599832144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103189.69072164949,
            "unit": "ns",
            "range": "± 8486.698962397013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119613.54166666667,
            "unit": "ns",
            "range": "± 17546.54933713039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7880.6122448979595,
            "unit": "ns",
            "range": "± 1272.9265058647545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24838.297872340427,
            "unit": "ns",
            "range": "± 2672.2833208470142"
          }
        ]
      }
    ]
  }
}