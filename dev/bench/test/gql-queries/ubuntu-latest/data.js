window.BENCHMARK_DATA = {
  "lastUpdate": 1702832093895,
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
          "id": "c689d1b4cf3864c605b1a32010df2b7ce79e05d4",
          "message": "Helper query fix",
          "timestamp": "2023-12-18T01:43:52+09:00",
          "tree_id": "2d5fa37595f9a90ef0e48d0f22016c0602b7db0a",
          "url": "https://github.com/greymistcube/libplanet/commit/c689d1b4cf3864c605b1a32010df2b7ce79e05d4"
        },
        "date": 1702832087585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3800070.162434896,
            "unit": "ns",
            "range": "± 7981.61657149001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218539.9236653645,
            "unit": "ns",
            "range": "± 3040.7986598448942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760908.0555245535,
            "unit": "ns",
            "range": "± 4549.994396702788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909719.0045572917,
            "unit": "ns",
            "range": "± 3023.6709743252472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615665.0931490385,
            "unit": "ns",
            "range": "± 1066.2819122448896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578468.7518404447,
            "unit": "ns",
            "range": "± 1045.2569940558942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2425101.2666666666,
            "unit": "ns",
            "range": "± 33949.62634859954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2448991.3974358975,
            "unit": "ns",
            "range": "± 78870.71816947118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111701.6875,
            "unit": "ns",
            "range": "± 82383.06158758822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2881960.843137255,
            "unit": "ns",
            "range": "± 115014.08327720089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6868863.64,
            "unit": "ns",
            "range": "± 181011.14584418092"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40783.44565217391,
            "unit": "ns",
            "range": "± 5522.207759173443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199166.4090909091,
            "unit": "ns",
            "range": "± 4871.152585903209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190734.9661016949,
            "unit": "ns",
            "range": "± 8140.185425249955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162517.77777777778,
            "unit": "ns",
            "range": "± 2904.697444111876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3069182.3076923075,
            "unit": "ns",
            "range": "± 17964.425764941738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2867302,
            "unit": "ns",
            "range": "± 26773.900898698594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12232.560240963856,
            "unit": "ns",
            "range": "± 1298.7627634941518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64174.769230769234,
            "unit": "ns",
            "range": "± 6473.380250562766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69745.81,
            "unit": "ns",
            "range": "± 18720.160863665544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58833.166666666664,
            "unit": "ns",
            "range": "± 11031.212701065117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2871.8829787234044,
            "unit": "ns",
            "range": "± 366.847507400085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14621.17,
            "unit": "ns",
            "range": "± 2094.3169328572326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5488345.466666667,
            "unit": "ns",
            "range": "± 69316.35730152285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14814271.5,
            "unit": "ns",
            "range": "± 158169.83586322647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36621172.461538464,
            "unit": "ns",
            "range": "± 110604.56420707013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74839976.85714285,
            "unit": "ns",
            "range": "± 321346.5750675901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150330278.8,
            "unit": "ns",
            "range": "± 1061663.7466426524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969467.6354166666,
            "unit": "ns",
            "range": "± 83086.2674852716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866792.2352941176,
            "unit": "ns",
            "range": "± 88267.89130164678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1371408.5967741935,
            "unit": "ns",
            "range": "± 92665.25077771631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5707747.7,
            "unit": "ns",
            "range": "± 130771.169168091"
          }
        ]
      }
    ]
  }
}