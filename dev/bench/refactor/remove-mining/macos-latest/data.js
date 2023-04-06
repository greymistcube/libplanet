window.BENCHMARK_DATA = {
  "lastUpdate": 1680757331697,
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
          "id": "2da78731588597800cc25bf5e5ee336ffab1b965",
          "message": "Remove mining",
          "timestamp": "2023-04-06T13:45:24+09:00",
          "tree_id": "c19cda80e6181d02f1edc94274a212e9c9e3677b",
          "url": "https://github.com/greymistcube/libplanet/commit/2da78731588597800cc25bf5e5ee336ffab1b965"
        },
        "date": 1680757232830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7671793.153846154,
            "unit": "ns",
            "range": "± 55064.882832052695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20157814.416666668,
            "unit": "ns",
            "range": "± 664589.6896663544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48350233.875,
            "unit": "ns",
            "range": "± 926925.0927993319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98577561.36666666,
            "unit": "ns",
            "range": "± 1811433.4475458486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198317752.46153846,
            "unit": "ns",
            "range": "± 3078452.7530139936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63776.8085106383,
            "unit": "ns",
            "range": "± 9387.43053497383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380394.43902439025,
            "unit": "ns",
            "range": "± 19042.571607054975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325309.4680851064,
            "unit": "ns",
            "range": "± 25481.28279493233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297821.05670103093,
            "unit": "ns",
            "range": "± 22265.19783062472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5500708.235294118,
            "unit": "ns",
            "range": "± 108315.07311573111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3982933.7647058824,
            "unit": "ns",
            "range": "± 78364.6037351442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19082.170454545456,
            "unit": "ns",
            "range": "± 1990.6561225378664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85249.70833333333,
            "unit": "ns",
            "range": "± 7828.606483399829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83964.07692307692,
            "unit": "ns",
            "range": "± 8481.994480113963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 228418.39361702127,
            "unit": "ns",
            "range": "± 21313.414482114553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7039.147368421052,
            "unit": "ns",
            "range": "± 1301.940752389433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17631.54651162791,
            "unit": "ns",
            "range": "± 2066.827918543303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595029.9793814432,
            "unit": "ns",
            "range": "± 139626.10595600333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944679.4166666665,
            "unit": "ns",
            "range": "± 145475.28232598124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2590560.175257732,
            "unit": "ns",
            "range": "± 290034.63425425626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6545959.888888889,
            "unit": "ns",
            "range": "± 216463.88127554447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260624.361702128,
            "unit": "ns",
            "range": "± 125315.20291725345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3348431.8591549294,
            "unit": "ns",
            "range": "± 164103.35459706013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4462327.279411765,
            "unit": "ns",
            "range": "± 212035.8001062131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4336854.134831461,
            "unit": "ns",
            "range": "± 242230.4384279185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8339892.625,
            "unit": "ns",
            "range": "± 358480.7361127367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6182588.344140625,
            "unit": "ns",
            "range": "± 141065.93053084557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925541.2282552083,
            "unit": "ns",
            "range": "± 17371.324814866224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279472.3013392857,
            "unit": "ns",
            "range": "± 9846.275154013689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2420501.115364583,
            "unit": "ns",
            "range": "± 33369.05026438164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870963.1333984375,
            "unit": "ns",
            "range": "± 7577.12895275058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732183.3795340402,
            "unit": "ns",
            "range": "± 5104.824374922703"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf92e685aa65475d9195d1a1dd417b9b6f71d853",
          "message": "Merge pull request #3062 from greymistcube/refactor/propose-block\n\n🧹 Remove tx execution update from `ProposeBlock()`",
          "timestamp": "2023-04-05T17:49:00+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/bf92e685aa65475d9195d1a1dd417b9b6f71d853"
        },
        "date": 1680757316693,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7665881.138888889,
            "unit": "ns",
            "range": "± 253700.4357291323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21259408.436363637,
            "unit": "ns",
            "range": "± 876674.6970596664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46116823.625,
            "unit": "ns",
            "range": "± 706198.3425610565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95017766.71428572,
            "unit": "ns",
            "range": "± 1432433.5504487797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190905992.2857143,
            "unit": "ns",
            "range": "± 3087190.4602214075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61151.0376344086,
            "unit": "ns",
            "range": "± 8901.504689070636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386033.72340425535,
            "unit": "ns",
            "range": "± 24059.116469178807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352174.6818181818,
            "unit": "ns",
            "range": "± 14976.19600626881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342799.9583333333,
            "unit": "ns",
            "range": "± 12082.784001722017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6028013.223404256,
            "unit": "ns",
            "range": "± 659488.5602161097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4268581.806451613,
            "unit": "ns",
            "range": "± 176835.26791511208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26614.53125,
            "unit": "ns",
            "range": "± 3466.075036248912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109322.82323232324,
            "unit": "ns",
            "range": "± 18180.49064739918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126884.81914893616,
            "unit": "ns",
            "range": "± 14369.513005129143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 260012.18085106384,
            "unit": "ns",
            "range": "± 40015.49274356061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9345.458762886597,
            "unit": "ns",
            "range": "± 2149.084072913029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18199.906593406595,
            "unit": "ns",
            "range": "± 2483.549310420346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1573178.3762886599,
            "unit": "ns",
            "range": "± 179945.67025622958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962813.2,
            "unit": "ns",
            "range": "± 197511.2670276835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2565026.8913043477,
            "unit": "ns",
            "range": "± 263047.5806477327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7059338.520408163,
            "unit": "ns",
            "range": "± 471442.8843844244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3277445.936170213,
            "unit": "ns",
            "range": "± 281309.0294602483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440788.1979166665,
            "unit": "ns",
            "range": "± 351112.0599187858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4350644.835164835,
            "unit": "ns",
            "range": "± 322454.6651212733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4528945.549450549,
            "unit": "ns",
            "range": "± 368824.87920421787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8439864.5,
            "unit": "ns",
            "range": "± 348298.31482256023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7071095.4484375,
            "unit": "ns",
            "range": "± 294100.4201413787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2074551.3759300595,
            "unit": "ns",
            "range": "± 49061.13382158938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352523.201961436,
            "unit": "ns",
            "range": "± 52421.13770126832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2809788.369441106,
            "unit": "ns",
            "range": "± 61927.98541705457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 884800.5393415178,
            "unit": "ns",
            "range": "± 15280.82856981411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756855.3757102273,
            "unit": "ns",
            "range": "± 18585.78210408494"
          }
        ]
      }
    ]
  }
}