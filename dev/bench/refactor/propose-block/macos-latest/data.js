window.BENCHMARK_DATA = {
  "lastUpdate": 1680684629848,
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
          "id": "1faba70c08b30f355a4a8e72c7f5ebd93ceb071b",
          "message": "Remove tx execution update from propose",
          "timestamp": "2023-04-05T17:18:33+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/1faba70c08b30f355a4a8e72c7f5ebd93ceb071b"
        },
        "date": 1680683615959,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7560516.142857143,
            "unit": "ns",
            "range": "± 53868.11920380129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19346450.46,
            "unit": "ns",
            "range": "± 764323.7285609713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48697272.026315786,
            "unit": "ns",
            "range": "± 1679826.1786470604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95084246.53125,
            "unit": "ns",
            "range": "± 2656529.990495386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193261559.175,
            "unit": "ns",
            "range": "± 6766389.104514051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57467.654639175256,
            "unit": "ns",
            "range": "± 6507.721169471509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360265.1369863014,
            "unit": "ns",
            "range": "± 17890.222876317315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294774.21428571426,
            "unit": "ns",
            "range": "± 15698.761640265315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259803.35714285713,
            "unit": "ns",
            "range": "± 12660.22148309559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5237196.357142857,
            "unit": "ns",
            "range": "± 65208.894127443804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3814694.210526316,
            "unit": "ns",
            "range": "± 84686.88622316586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17072.517647058823,
            "unit": "ns",
            "range": "± 1344.3903611441342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86556.93814432989,
            "unit": "ns",
            "range": "± 7880.734319389323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80997.47826086957,
            "unit": "ns",
            "range": "± 6103.7214417994755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218078.65625,
            "unit": "ns",
            "range": "± 19961.471789861444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5512.162921348315,
            "unit": "ns",
            "range": "± 656.1729425550619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17281.9,
            "unit": "ns",
            "range": "± 1840.3145313117818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662639.0303030303,
            "unit": "ns",
            "range": "± 186040.65708659857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3017214.5384615385,
            "unit": "ns",
            "range": "± 150702.41391164644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2665254.37628866,
            "unit": "ns",
            "range": "± 256738.7666935765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6650114.065217392,
            "unit": "ns",
            "range": "± 224002.18635921116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3091470.798245614,
            "unit": "ns",
            "range": "± 130079.4589178318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3538333.037037037,
            "unit": "ns",
            "range": "± 147175.03754514115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4311611.910447761,
            "unit": "ns",
            "range": "± 193644.53150974395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4402346.94117647,
            "unit": "ns",
            "range": "± 139634.27972340898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8011112.591836735,
            "unit": "ns",
            "range": "± 315426.31985727657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6096084.954799107,
            "unit": "ns",
            "range": "± 38158.352908833476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887416.9458333333,
            "unit": "ns",
            "range": "± 12368.774382160285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242506.1462239583,
            "unit": "ns",
            "range": "± 11836.080768306929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2407961.4388020835,
            "unit": "ns",
            "range": "± 14892.58190449964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829479.1420898438,
            "unit": "ns",
            "range": "± 5078.142461798819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 688544.5989815848,
            "unit": "ns",
            "range": "± 3545.470225124251"
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
          "id": "7e0ec34410b8a518b823616ad592b53b7deedd09",
          "message": "[skip changelog] Remove tx execution update from propose",
          "timestamp": "2023-04-05T17:29:37+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/7e0ec34410b8a518b823616ad592b53b7deedd09"
        },
        "date": 1680684614938,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9344955.353535354,
            "unit": "ns",
            "range": "± 713634.2347120171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24357887.92156863,
            "unit": "ns",
            "range": "± 986972.0514480607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55651031.67045455,
            "unit": "ns",
            "range": "± 3318727.0336572733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108458305.42857143,
            "unit": "ns",
            "range": "± 1801107.464142525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227649979.20588234,
            "unit": "ns",
            "range": "± 4540740.299623879"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76616.98809523809,
            "unit": "ns",
            "range": "± 4139.3026957551065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391158,
            "unit": "ns",
            "range": "± 25406.257048923108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341871.9791666667,
            "unit": "ns",
            "range": "± 31613.7503631033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336076.6111111111,
            "unit": "ns",
            "range": "± 35882.53608571407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6093181.983870967,
            "unit": "ns",
            "range": "± 398240.2980984682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4544445.104166667,
            "unit": "ns",
            "range": "± 385476.80715535115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21544.85714285714,
            "unit": "ns",
            "range": "± 3118.7670946186718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106101.45054945054,
            "unit": "ns",
            "range": "± 11940.370384413203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119346.52173913043,
            "unit": "ns",
            "range": "± 14734.932720384151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 275126.92783505155,
            "unit": "ns",
            "range": "± 29487.957526564773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8585.31914893617,
            "unit": "ns",
            "range": "± 1393.3691045680823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19625.79775280899,
            "unit": "ns",
            "range": "± 2486.8437927502296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654750.2448979593,
            "unit": "ns",
            "range": "± 147503.73694850737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3138493.9852941176,
            "unit": "ns",
            "range": "± 150374.79890449377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2560220.5,
            "unit": "ns",
            "range": "± 200197.6617629836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6786589.94117647,
            "unit": "ns",
            "range": "± 213185.20095816263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3651626.840659341,
            "unit": "ns",
            "range": "± 318125.913224665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3652111.5714285714,
            "unit": "ns",
            "range": "± 59838.11077297745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4923267.407216495,
            "unit": "ns",
            "range": "± 412369.3561616941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4749487.260869565,
            "unit": "ns",
            "range": "± 329343.8909964954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8938355.659793815,
            "unit": "ns",
            "range": "± 591533.8756642536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7349915.208669355,
            "unit": "ns",
            "range": "± 330832.6472915684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165330.3493303573,
            "unit": "ns",
            "range": "± 60463.35165415499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378723.7620192308,
            "unit": "ns",
            "range": "± 21983.44676360758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3179112.6260172524,
            "unit": "ns",
            "range": "± 213484.26400906543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851439.7401646206,
            "unit": "ns",
            "range": "± 9688.963297068067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 842312.5907076322,
            "unit": "ns",
            "range": "± 22388.435956329587"
          }
        ]
      }
    ]
  }
}