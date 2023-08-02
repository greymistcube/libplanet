window.BENCHMARK_DATA = {
  "lastUpdate": 1690963747085,
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
        "date": 1690963722998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1284157.4074074074,
            "unit": "ns",
            "range": "± 48410.64751840903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2475493.6170212766,
            "unit": "ns",
            "range": "± 87881.74466479599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1897256.7567567567,
            "unit": "ns",
            "range": "± 64102.36839332563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4585084.2105263155,
            "unit": "ns",
            "range": "± 231204.34082005272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43073.170731707316,
            "unit": "ns",
            "range": "± 2270.2612445793466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6890046.153846154,
            "unit": "ns",
            "range": "± 47195.261333185685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17746000,
            "unit": "ns",
            "range": "± 80830.69607872635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45214271.428571425,
            "unit": "ns",
            "range": "± 200190.23425259758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91604069.23076923,
            "unit": "ns",
            "range": "± 622616.3082570937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185864515.3846154,
            "unit": "ns",
            "range": "± 1431063.0045797855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4996151.785714285,
            "unit": "ns",
            "range": "± 45780.486519356804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553581.7940848214,
            "unit": "ns",
            "range": "± 5742.381932386215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155204.8001802885,
            "unit": "ns",
            "range": "± 3757.416999681518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2521357.2823660714,
            "unit": "ns",
            "range": "± 16643.87658015071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818245.33203125,
            "unit": "ns",
            "range": "± 5955.48591638604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748833.0078125,
            "unit": "ns",
            "range": "± 2742.2568090049567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2934350,
            "unit": "ns",
            "range": "± 51849.14137706102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3161982.1428571427,
            "unit": "ns",
            "range": "± 87476.07526281825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3970607.6923076925,
            "unit": "ns",
            "range": "± 46753.38600105989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3502118.5185185187,
            "unit": "ns",
            "range": "± 96341.96320733699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5887918.421052632,
            "unit": "ns",
            "range": "± 196797.6445355402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259381.66666666666,
            "unit": "ns",
            "range": "± 11473.779860786299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243050,
            "unit": "ns",
            "range": "± 7945.921873426937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228895.83333333334,
            "unit": "ns",
            "range": "± 13205.436812294727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3956796.153846154,
            "unit": "ns",
            "range": "± 28746.119024563282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3565933.3333333335,
            "unit": "ns",
            "range": "± 55540.61148213552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18104.21052631579,
            "unit": "ns",
            "range": "± 2022.3178080878617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85679.79797979798,
            "unit": "ns",
            "range": "± 7429.244197529549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74036.17021276595,
            "unit": "ns",
            "range": "± 4651.6467442274325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85504.54545454546,
            "unit": "ns",
            "range": "± 9036.616561051673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4391.7525773195875,
            "unit": "ns",
            "range": "± 764.2630032549856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18403.157894736843,
            "unit": "ns",
            "range": "± 1681.7197777793551"
          }
        ]
      }
    ]
  }
}