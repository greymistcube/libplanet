window.BENCHMARK_DATA = {
  "lastUpdate": 1704333418608,
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
          "id": "6af45500afe3dfcb336b82e35ad2b48e86f3ae41",
          "message": "Release 3.9.3",
          "timestamp": "2024-01-04T10:44:24+09:00",
          "tree_id": "27d8eecf75f45f048e9556d45d30d7f023e92d47",
          "url": "https://github.com/greymistcube/libplanet/commit/6af45500afe3dfcb336b82e35ad2b48e86f3ae41"
        },
        "date": 1704333323702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759586.906550481,
            "unit": "ns",
            "range": "± 32293.808038752846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219372.5151367188,
            "unit": "ns",
            "range": "± 7308.651408525967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 787515.2268629808,
            "unit": "ns",
            "range": "± 8759.307344156116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962647.5845424107,
            "unit": "ns",
            "range": "± 5384.929170930006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618825.4431152344,
            "unit": "ns",
            "range": "± 987.745034515883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572392.0337611607,
            "unit": "ns",
            "range": "± 600.713570392773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2368826.5425531915,
            "unit": "ns",
            "range": "± 62974.16114599407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2602737.7,
            "unit": "ns",
            "range": "± 125737.58665277365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3114467.466666667,
            "unit": "ns",
            "range": "± 57641.145397148706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2902035.672727273,
            "unit": "ns",
            "range": "± 116636.39596548254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6995584.131578947,
            "unit": "ns",
            "range": "± 146334.02352350924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41075.76530612245,
            "unit": "ns",
            "range": "± 5368.918414760177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195856.84375,
            "unit": "ns",
            "range": "± 8959.384876877642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191849.5,
            "unit": "ns",
            "range": "± 5667.656816807405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164956.41379310345,
            "unit": "ns",
            "range": "± 4401.917581473859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3095119.5384615385,
            "unit": "ns",
            "range": "± 28299.655559197727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2913934.5,
            "unit": "ns",
            "range": "± 24109.348428645808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17263.864583333332,
            "unit": "ns",
            "range": "± 1927.1518396452957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63362.87368421053,
            "unit": "ns",
            "range": "± 7267.963080917288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68913.12,
            "unit": "ns",
            "range": "± 19316.729186125198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59661.6875,
            "unit": "ns",
            "range": "± 12016.441645391753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3326.310344827586,
            "unit": "ns",
            "range": "± 678.7086457545481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14336.494949494949,
            "unit": "ns",
            "range": "± 2670.265867576796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5572262.25,
            "unit": "ns",
            "range": "± 32894.502809947386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14730141.307692308,
            "unit": "ns",
            "range": "± 134171.3858872205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37207121.692307696,
            "unit": "ns",
            "range": "± 321422.4489819653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73999192.13333334,
            "unit": "ns",
            "range": "± 928951.3010571857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149763354.6153846,
            "unit": "ns",
            "range": "± 748693.5249892017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968095.2446808511,
            "unit": "ns",
            "range": "± 89208.69909865838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1832154.3275862068,
            "unit": "ns",
            "range": "± 77322.16129896678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1366330.7865168538,
            "unit": "ns",
            "range": "± 87162.67039544665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5782240.955555555,
            "unit": "ns",
            "range": "± 219854.2439915338"
          }
        ]
      },
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
          "id": "e2d0f18309be8d748fa0d3b7e36e26bbcfca0f0f",
          "message": "Release 3.9.3",
          "timestamp": "2024-01-04T10:45:57+09:00",
          "tree_id": "27d8eecf75f45f048e9556d45d30d7f023e92d47",
          "url": "https://github.com/greymistcube/libplanet/commit/e2d0f18309be8d748fa0d3b7e36e26bbcfca0f0f"
        },
        "date": 1704333412383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3601791.7596153845,
            "unit": "ns",
            "range": "± 18726.686679212937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209671.9736328125,
            "unit": "ns",
            "range": "± 2270.2902336371667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768703.4263822115,
            "unit": "ns",
            "range": "± 4373.607757961727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935949.1762695312,
            "unit": "ns",
            "range": "± 3012.6531234367926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604128.027483259,
            "unit": "ns",
            "range": "± 1348.7263054363586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581551.6330217634,
            "unit": "ns",
            "range": "± 647.7938055243706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2370519.04,
            "unit": "ns",
            "range": "± 57171.7872042088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2498140,
            "unit": "ns",
            "range": "± 48362.95416850341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3098702.8666666667,
            "unit": "ns",
            "range": "± 43254.524483187495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2892666.4594594594,
            "unit": "ns",
            "range": "± 97161.85112841202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6641366,
            "unit": "ns",
            "range": "± 146633.03169477195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38092.739583333336,
            "unit": "ns",
            "range": "± 4606.29416466961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196611.57142857142,
            "unit": "ns",
            "range": "± 9463.862817943475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191183.92857142858,
            "unit": "ns",
            "range": "± 3172.877011950988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170235.33333333334,
            "unit": "ns",
            "range": "± 1342.7195830805026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018540.846153846,
            "unit": "ns",
            "range": "± 35714.03307955701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2860888.066666667,
            "unit": "ns",
            "range": "± 34534.8345059359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11945.488888888889,
            "unit": "ns",
            "range": "± 869.484740152639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65387.76315789474,
            "unit": "ns",
            "range": "± 6640.223277472834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57450.76530612245,
            "unit": "ns",
            "range": "± 5800.620517466205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57382.6875,
            "unit": "ns",
            "range": "± 10689.17993537341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2650.9473684210525,
            "unit": "ns",
            "range": "± 407.3833044872065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14334.156565656565,
            "unit": "ns",
            "range": "± 2792.249737243255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5550411.714285715,
            "unit": "ns",
            "range": "± 23849.001383475388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14470904.764705881,
            "unit": "ns",
            "range": "± 288049.0825696051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36242800.615384616,
            "unit": "ns",
            "range": "± 263904.3628266177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73967208.46153846,
            "unit": "ns",
            "range": "± 644445.4143872615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148637231.15384614,
            "unit": "ns",
            "range": "± 466866.210315269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 921532.4302325582,
            "unit": "ns",
            "range": "± 51035.39938364367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815705.5294117648,
            "unit": "ns",
            "range": "± 70317.90024776135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1344705.4270833333,
            "unit": "ns",
            "range": "± 81499.37214065481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5866786.931506849,
            "unit": "ns",
            "range": "± 288743.58017554693"
          }
        ]
      }
    ]
  }
}