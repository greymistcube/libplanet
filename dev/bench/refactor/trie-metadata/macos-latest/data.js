window.BENCHMARK_DATA = {
  "lastUpdate": 1705900111825,
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
          "id": "b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d",
          "message": "Move TrieMetadata to Libplanet.Store",
          "timestamp": "2024-01-22T13:33:41+09:00",
          "tree_id": "f25875bc53002857b9c25706e851573729068f20",
          "url": "https://github.com/greymistcube/libplanet/commit/b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d"
        },
        "date": 1705899611810,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9630819.625,
            "unit": "ns",
            "range": "± 182170.3191217402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23550825.89473684,
            "unit": "ns",
            "range": "± 1742006.4843092635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72873058.39690721,
            "unit": "ns",
            "range": "± 7206931.848158854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123710929.5909091,
            "unit": "ns",
            "range": "± 2993700.6374458843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256171505.01086956,
            "unit": "ns",
            "range": "± 27874806.136390284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81930.84536082474,
            "unit": "ns",
            "range": "± 27691.88945429247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256312.62886597938,
            "unit": "ns",
            "range": "± 36875.895815762786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257958.35416666666,
            "unit": "ns",
            "range": "± 32211.727777964155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242698.3777777778,
            "unit": "ns",
            "range": "± 21432.73053568375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4803517.375,
            "unit": "ns",
            "range": "± 301927.37030791555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4091874.0555555555,
            "unit": "ns",
            "range": "± 84760.77453649267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16603.892473118278,
            "unit": "ns",
            "range": "± 3066.3858504703003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81595.35555555555,
            "unit": "ns",
            "range": "± 11143.272416460108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87843.52747252748,
            "unit": "ns",
            "range": "± 7183.839048464051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90464.71428571429,
            "unit": "ns",
            "range": "± 18570.36235527862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6157.459183673469,
            "unit": "ns",
            "range": "± 1139.2832248208038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16188.97,
            "unit": "ns",
            "range": "± 3697.191282978106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671495.0752688171,
            "unit": "ns",
            "range": "± 350282.1189305606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3926120.39,
            "unit": "ns",
            "range": "± 931211.6012831137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3339342.4587628865,
            "unit": "ns",
            "range": "± 917693.8906746301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33706951.08163265,
            "unit": "ns",
            "range": "± 7830318.140984618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3877942.4784946237,
            "unit": "ns",
            "range": "± 475479.28480003844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583766.1764705884,
            "unit": "ns",
            "range": "± 71078.327416164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5368209.06701031,
            "unit": "ns",
            "range": "± 1122004.794563006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4514418.1,
            "unit": "ns",
            "range": "± 307922.55250500125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27332280.541666668,
            "unit": "ns",
            "range": "± 4443409.482053918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5477047.535488697,
            "unit": "ns",
            "range": "± 545864.52513857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2086293.2128295898,
            "unit": "ns",
            "range": "± 278063.335110252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146088.2176737883,
            "unit": "ns",
            "range": "± 166783.1219128637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633335.8336332515,
            "unit": "ns",
            "range": "± 279765.16716915165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802705.4029913652,
            "unit": "ns",
            "range": "± 83963.8479149706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 658535.274605129,
            "unit": "ns",
            "range": "± 40334.167609951444"
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
          "id": "36387cb116e4dd7f8aa53ed114e43aeb59f4746f",
          "message": "Implemented IBencodable for TrieMetadata",
          "timestamp": "2024-01-22T13:41:25+09:00",
          "tree_id": "fc05547f3c6b2053cad9f3fc3965daaf190212c9",
          "url": "https://github.com/greymistcube/libplanet/commit/36387cb116e4dd7f8aa53ed114e43aeb59f4746f"
        },
        "date": 1705900081719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9174303.833333334,
            "unit": "ns",
            "range": "± 129807.37204283378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23402011.2,
            "unit": "ns",
            "range": "± 796190.6518043116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59564761.61016949,
            "unit": "ns",
            "range": "± 2584895.4950524964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121539732.9,
            "unit": "ns",
            "range": "± 8197184.579511444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238409131.7264151,
            "unit": "ns",
            "range": "± 9949455.541584581"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60626.5393258427,
            "unit": "ns",
            "range": "± 15688.809253628246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251899.25510204083,
            "unit": "ns",
            "range": "± 21169.151619512817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263596.3333333333,
            "unit": "ns",
            "range": "± 14031.38173501007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279481.52808988764,
            "unit": "ns",
            "range": "± 19375.074094925705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5475451.736842105,
            "unit": "ns",
            "range": "± 431898.24874483526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3695679.3061224488,
            "unit": "ns",
            "range": "± 294839.0777458246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14281.860824742267,
            "unit": "ns",
            "range": "± 2200.388172126147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83478.95959595959,
            "unit": "ns",
            "range": "± 18988.934084666795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69443.85714285714,
            "unit": "ns",
            "range": "± 15852.07709242956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70120.25773195876,
            "unit": "ns",
            "range": "± 17613.73177516524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4633.626262626262,
            "unit": "ns",
            "range": "± 1488.4452618993362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14675.13829787234,
            "unit": "ns",
            "range": "± 3262.8144279778962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1531211.8440860214,
            "unit": "ns",
            "range": "± 236896.23319245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3539201.554347826,
            "unit": "ns",
            "range": "± 641043.1081974071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3280935.7842105264,
            "unit": "ns",
            "range": "± 1125892.8893408608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33655947.67045455,
            "unit": "ns",
            "range": "± 8782680.355437038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3727689.804597701,
            "unit": "ns",
            "range": "± 434584.4156054828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3779683.988764045,
            "unit": "ns",
            "range": "± 294333.52290963667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4367614.233766234,
            "unit": "ns",
            "range": "± 222980.27660865197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4572941.5,
            "unit": "ns",
            "range": "± 488614.6338896461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27385001.027472526,
            "unit": "ns",
            "range": "± 3905735.152766308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4802097.919890873,
            "unit": "ns",
            "range": "± 220107.8296226517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1482897.4096679688,
            "unit": "ns",
            "range": "± 46122.21908409493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1054648.2677359532,
            "unit": "ns",
            "range": "± 80736.60580891772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2738472.0466496395,
            "unit": "ns",
            "range": "± 112523.95128563582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819397.2428808594,
            "unit": "ns",
            "range": "± 69288.72950818403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724913.133828125,
            "unit": "ns",
            "range": "± 54954.76431133106"
          }
        ]
      }
    ]
  }
}