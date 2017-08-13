package de.golfgl.gdxgamesvcs;

import com.badlogic.gdx.utils.JsonValue;

import de.golfgl.gdxgamesvcs.leaderboard.LeaderBoardEntry;

/**
 * GameJolt leaderboard entry
 * <p>
 * Created by Benjamin Schulte on 13.08.2017.
 */

public class GjScoreboardEntry extends LeaderBoardEntry {
    protected String score;
    protected long sort;
    protected String tag;
    protected String displayName;
    protected String rank;
    protected String userId;
    protected String stored;

    protected static GjScoreboardEntry fromJson(JsonValue json, int rank) {
        GjScoreboardEntry gje = new GjScoreboardEntry();
        gje.rank = String.valueOf(rank);
        gje.score = json.getString("score");
        gje.sort = json.getLong("sort");
        gje.tag = json.getString("extra_data");
        gje.userId = json.getString("user_id");

        if (gje.userId != null && !gje.userId.isEmpty())
            gje.displayName = json.getString("user");
        else
            gje.displayName = json.getString("guest");

        gje.stored = json.getString("stored");

        return gje;
    }

    @Override
    public String getFormattedValue() {
        return score;
    }

    @Override
    public String getScoreRank() {
        return rank;
    }

    @Override
    public long getSortValue() {
        return sort;
    }

    @Override
    public String getScoreTag() {
        return tag;
    }

    @Override
    public String getUserDisplayName() {
        return displayName;
    }

    @Override
    public String getUserId() {
        return userId;
    }
}
